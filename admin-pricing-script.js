// Global Admin Panel - Pricing Management JavaScript

class PricingManager {
    constructor() {
        this.currentEditingId = null;
        this.pricingData = new Map();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadPricingData();
        this.setupRealtimeListener();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('pricingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.savePricing();
        });

        // Close modal on outside click
        document.getElementById('pricingModal').addEventListener('click', (e) => {
            if (e.target.id === 'pricingModal') {
                this.closeModal();
            }
        });
    }

    setupRealtimeListener() {
        // Listen for real-time updates to the plans collection
        window.firebaseOnSnapshot(
            window.firebaseCollection(window.firebaseDb, 'plans'),
            (snapshot) => {
                console.log('Real-time update received');
                this.pricingData.clear();
                
                snapshot.forEach((doc) => {
                    this.pricingData.set(doc.id, {
                        id: doc.id,
                        ...doc.data()
                    });
                });
                
                this.renderPricingGrid();
                this.hideLoading();
            },
            (error) => {
                console.error('Error listening to pricing updates:', error);
                this.showStatus('Error listening to real-time updates: ' + error.message, 'error');
            }
        );
    }

    async loadPricingData() {
        try {
            this.showLoading();
            
            const querySnapshot = await window.firebaseGetDocs(
                window.firebaseCollection(window.firebaseDb, 'plans')
            );
            
            this.pricingData.clear();
            querySnapshot.forEach((doc) => {
                this.pricingData.set(doc.id, {
                    id: doc.id,
                    ...doc.data()
                });
            });
            
            this.renderPricingGrid();
            this.hideLoading();
            
        } catch (error) {
            console.error('Error loading pricing data:', error);
            this.showStatus('Error loading pricing data: ' + error.message, 'error');
            this.hideLoading();
        }
    }

    renderPricingGrid() {
        const grid = document.getElementById('pricingGrid');
        
        if (this.pricingData.size === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #64748b;">
                    <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
                    <h3>No pricing data found</h3>
                    <p>Click "Add New Country Pricing" to get started</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = Array.from(this.pricingData.values())
            .sort((a, b) => a.country_name.localeCompare(b.country_name))
            .map(pricing => this.createPricingCard(pricing))
            .join('');
    }

    createPricingCard(pricing) {
        const countryFlags = {
            'india': '🇮🇳',
            'saudi': '🇸🇦',
            'global': '🌍',
            'us': '🇺🇸',
            'uk': '🇬🇧',
            'uae': '🇦🇪'
        };

        const flag = countryFlags[pricing.id] || '🏳️';
        const symbol = pricing.currency_symbol || '$';

        return `
            <div class="pricing-card">
                <div class="card-header">
                    <div class="country-info">
                        <div class="country-flag">${flag}</div>
                        <div class="country-details">
                            <h3>${pricing.country_name}</h3>
                            <p>${pricing.currency} (${symbol})</p>
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-secondary btn-small" onclick="pricingManager.editPricing('${pricing.id}')">
                            ✏️ Edit
                        </button>
                        <button class="btn btn-danger btn-small" onclick="pricingManager.deletePricing('${pricing.id}')">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
                
                <div class="pricing-details">
                    <div class="price-item">
                        <span class="price-label">Monthly</span>
                        <span class="price-value">${symbol}${pricing.monthly_price?.toLocaleString() || 0}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Quarterly</span>
                        <span class="price-value">${symbol}${pricing.quarterly_price?.toLocaleString() || 0}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Half-yearly</span>
                        <span class="price-value">${symbol}${pricing.halfyear_price?.toLocaleString() || 0}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Yearly</span>
                        <span class="price-value">${symbol}${pricing.yearly_price?.toLocaleString() || 0}</span>
                    </div>
                </div>
            </div>
        `;
    }

    openAddModal() {
        this.currentEditingId = null;
        document.getElementById('modalTitle').textContent = 'Add New Country Pricing';
        document.getElementById('pricingForm').reset();
        document.getElementById('countryId').disabled = false;
        document.getElementById('pricingModal').style.display = 'block';
    }

    editPricing(id) {
        const pricing = this.pricingData.get(id);
        if (!pricing) return;

        this.currentEditingId = id;
        document.getElementById('modalTitle').textContent = 'Edit Country Pricing';
        
        // Populate form
        document.getElementById('countryId').value = pricing.id;
        document.getElementById('countryId').disabled = true; // Don't allow changing ID when editing
        document.getElementById('countryName').value = pricing.country_name || '';
        document.getElementById('currency').value = pricing.currency || '';
        document.getElementById('currencySymbol').value = pricing.currency_symbol || '';
        document.getElementById('monthlyPrice').value = pricing.monthly_price || 0;
        document.getElementById('quarterlyPrice').value = pricing.quarterly_price || 0;
        document.getElementById('halfyearPrice').value = pricing.halfyear_price || 0;
        document.getElementById('yearlyPrice').value = pricing.yearly_price || 0;
        
        document.getElementById('pricingModal').style.display = 'block';
    }

    async deletePricing(id) {
        const pricing = this.pricingData.get(id);
        if (!pricing) return;

        if (!confirm(`Are you sure you want to delete pricing for ${pricing.country_name}?`)) {
            return;
        }

        try {
            await window.firebaseDeleteDoc(
                window.firebaseDoc(window.firebaseDb, 'plans', id)
            );
            
            this.showStatus(`Successfully deleted pricing for ${pricing.country_name}`, 'success');
            
        } catch (error) {
            console.error('Error deleting pricing:', error);
            this.showStatus('Error deleting pricing: ' + error.message, 'error');
        }
    }

    async savePricing() {
        try {
            const formData = new FormData(document.getElementById('pricingForm'));
            const countryId = document.getElementById('countryId').value.toLowerCase().trim();
            
            if (!countryId) {
                this.showStatus('Country ID is required', 'error');
                return;
            }

            const pricingData = {
                country_name: document.getElementById('countryName').value.trim(),
                currency: document.getElementById('currency').value.toUpperCase().trim(),
                currency_symbol: document.getElementById('currencySymbol').value.trim(),
                monthly_price: parseFloat(document.getElementById('monthlyPrice').value) || 0,
                quarterly_price: parseFloat(document.getElementById('quarterlyPrice').value) || 0,
                halfyear_price: parseFloat(document.getElementById('halfyearPrice').value) || 0,
                yearly_price: parseFloat(document.getElementById('yearlyPrice').value) || 0,
                updated_at: new Date()
            };

            // Add created_at only for new documents
            if (!this.currentEditingId) {
                pricingData.created_at = new Date();
            }

            await window.firebaseSetDoc(
                window.firebaseDoc(window.firebaseDb, 'plans', countryId),
                pricingData
            );

            const action = this.currentEditingId ? 'updated' : 'created';
            this.showStatus(`Successfully ${action} pricing for ${pricingData.country_name}`, 'success');
            this.closeModal();
            
        } catch (error) {
            console.error('Error saving pricing:', error);
            this.showStatus('Error saving pricing: ' + error.message, 'error');
        }
    }

    closeModal() {
        document.getElementById('pricingModal').style.display = 'none';
        document.getElementById('pricingForm').reset();
        this.currentEditingId = null;
    }

    refreshPricing() {
        this.loadPricingData();
        this.showStatus('Pricing data refreshed', 'success');
    }

    showLoading() {
        document.getElementById('loadingState').style.display = 'block';
        document.getElementById('pricingGrid').style.display = 'none';
    }

    hideLoading() {
        document.getElementById('loadingState').style.display = 'none';
        document.getElementById('pricingGrid').style.display = 'grid';
    }

    showStatus(message, type) {
        const statusEl = document.getElementById('statusMessage');
        statusEl.className = `status-message status-${type}`;
        statusEl.textContent = message;
        statusEl.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            statusEl.style.display = 'none';
        }, 5000);
    }
}

// Global functions for HTML onclick handlers
function openAddModal() {
    pricingManager.openAddModal();
}

function closeModal() {
    pricingManager.closeModal();
}

function refreshPricing() {
    pricingManager.refreshPricing();
}

// Initialize the pricing manager when DOM is loaded
let pricingManager;
document.addEventListener('DOMContentLoaded', () => {
    pricingManager = new PricingManager();
});