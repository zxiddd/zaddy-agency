// Register Page JavaScript
class RegisterForm {
    constructor() {
        this.form = document.getElementById('registerForm');
        this.currentStep = 1;
        this.totalSteps = 1;
        this.validationRules = this.initValidationRules();
        this.countries = this.initCountries();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initCountryDetection();
        this.initPasswordStrength();
        this.initPricingCards();
        this.initFormValidation();
        this.initSocialButtons();
        this.setupPricingUpdates();
    }

    initValidationRules() {
        return {
            fullName: {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z\s]+$/,
                message: 'Please enter a valid full name (letters and spaces only)'
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
            },
            phone: {
                required: true,
                minLength: 10,
                pattern: /^[\d\s\-\+\(\)]+$/,
                message: 'Please enter a valid phone number'
            },
            password: {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                message: 'Password must contain at least 8 characters with uppercase, lowercase, number and special character'
            },
            confirmPassword: {
                required: true,
                match: 'password',
                message: 'Passwords do not match'
            },
            restaurantName: {
                required: true,
                minLength: 2,
                message: 'Please enter your restaurant name'
            },
            businessType: {
                required: true,
                message: 'Please select your business type'
            },
            outlets: {
                required: true,
                message: 'Please select number of outlets'
            },
            country: {
                required: true,
                message: 'Please select your country'
            },
            city: {
                required: true,
                minLength: 2,
                message: 'Please enter your city'
            },
            terms: {
                required: true,
                message: 'You must agree to the Terms & Conditions'
            }
        };
    }

    initCountries() {
        return [
            { code: 'US', name: 'United States', currency: 'USD', symbol: '$', phone: '+1' },
            { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', phone: '+44' },
            { code: 'CA', name: 'Canada', currency: 'CAD', symbol: 'C$', phone: '+1' },
            { code: 'AU', name: 'Australia', currency: 'AUD', symbol: 'A$', phone: '+61' },
            { code: 'DE', name: 'Germany', currency: 'EUR', symbol: '€', phone: '+49' },
            { code: 'FR', name: 'France', currency: 'EUR', symbol: '€', phone: '+33' },
            { code: 'IN', name: 'India', currency: 'INR', symbol: '₹', phone: '+91' },
            { code: 'SG', name: 'Singapore', currency: 'SGD', symbol: 'S$', phone: '+65' },
            { code: 'AE', name: 'United Arab Emirates', currency: 'AED', symbol: 'د.إ', phone: '+971' },
            { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', symbol: 'ر.س', phone: '+966' },
            { code: 'JP', name: 'Japan', currency: 'JPY', symbol: '¥', phone: '+81' }
        ];
    }

    setupEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validateField(e.target));
            input.addEventListener('input', (e) => this.clearFieldError(e.target));
        });

        // Password confirmation
        const confirmPassword = document.getElementById('confirmPassword');
        if (confirmPassword) {
            confirmPassword.addEventListener('input', () => this.validatePasswordMatch());
        }

        // Country change
        const countrySelect = document.getElementById('country');
        if (countrySelect) {
            countrySelect.addEventListener('change', (e) => this.handleCountryChange(e.target.value));
        }

        // Pricing card selection
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
            card.addEventListener('click', () => this.selectPricingCard(card));
        });

        // Custom checkbox/radio styling
        this.initCustomInputs();
    }

    initCountryDetection() {
        // Set default country to US
        this.setDefaultCountry('US');
    }

    setDefaultCountry(countryCode) {
        const country = this.countries.find(c => c.code === countryCode);
        if (country) {
            // Set country dropdown
            const countrySelect = document.getElementById('country');
            if (countrySelect) {
                countrySelect.value = countryCode;
            }

            // Set phone country code
            const phoneCountryCode = document.getElementById('phoneCountryCode');
            if (phoneCountryCode) {
                phoneCountryCode.value = country.phone;
            }

            // Update pricing currency
            this.updatePricingCurrency(country);
        }
    }

    handleCountryChange(countryCode) {
        const country = this.countries.find(c => c.code === countryCode);
        if (country) {
            // Update phone country code
            const phoneCountryCode = document.getElementById('phoneCountryCode');
            if (phoneCountryCode) {
                phoneCountryCode.value = country.phone;
            }

            // Update pricing currency
            this.updatePricingCurrency(country);
        }
    }

    async updatePricingCurrency(country) {
        try {
            // First try to get pricing from Firestore
            const firestorePricing = await this.getFirestorePricing(country.code);
            
            if (firestorePricing) {
                this.renderFirestorePricing(firestorePricing, country);
            } else {
                // Fallback to static pricing if Firestore data not available
                this.renderStaticPricing(country);
            }
        } catch (error) {
            console.error('Error loading pricing from Firestore:', error);
            // Fallback to static pricing on error
            this.renderStaticPricing(country);
        }
    }

    async getFirestorePricing(countryCode) {
        try {
            if (!window.db) {
                console.warn('Firestore not initialized');
                return null;
            }

            // Map country codes to Firestore document IDs
            const countryMapping = {
                'IN': 'india',
                'SA': 'saudi',
                'AE': 'uae',
                'US': 'usa',
                'GB': 'uk',
                'AU': 'australia'
            };

            const docId = countryMapping[countryCode] || 'global';
            const docRef = window.db.collection('plans').doc(docId);
            const docSnap = await docRef.get();

            if (docSnap.exists) {
                return { id: docId, ...docSnap.data() };
            }

            return null;
        } catch (error) {
            console.error('Error fetching Firestore pricing:', error);
            return null;
        }
    }

    renderFirestorePricing(pricingData, country) {
        const priceElements = document.querySelectorAll('.price');
        const symbol = pricingData.currency_symbol || country.symbol || '$';

        // Get prices from Firestore data
        const prices = {
            monthly: pricingData.monthly_price || 49,
            quarterly: pricingData.quarterly_price || 39,
            halfyear: pricingData.halfyear_price || 35,
            yearly: pricingData.yearly_price || 29
        };

        priceElements.forEach((element, index) => {
            const planTypes = ['monthly', 'quarterly', 'biannual', 'annual'];
            const planType = planTypes[index] || 'monthly';
            
            // Map biannual to halfyear for Firestore data
            const firestoreKey = planType === 'biannual' ? 'halfyear' : planType;
            const price = prices[firestoreKey] || prices.monthly;
            
            if (country.currency === 'JPY' || price >= 1000) {
                element.innerHTML = `${symbol}${price.toLocaleString()}<span>/month</span>`;
            } else {
                element.innerHTML = `${symbol}${price}<span>/month</span>`;
            }
        });
    }

    renderStaticPricing(country) {
        const priceElements = document.querySelectorAll('.price');
        const basePrices = {
            monthly: 49,
            quarterly: 39,
            semiannual: 35,
            annual: 29
        };

        // Simple currency conversion (in real app, use actual exchange rates)
        const conversionRates = {
            'USD': 1,
            'EUR': 0.85,
            'GBP': 0.73,
            'CAD': 1.25,
            'AUD': 1.35,
            'INR': 75,
            'SGD': 1.35,
            'AED': 3.67,
            'SAR': 3.75,
            'JPY': 110
        };

        const rate = conversionRates[country.currency] || 1;

        priceElements.forEach((element, index) => {
            const planTypes = ['monthly', 'quarterly', 'semiannual', 'annual'];
            const planType = planTypes[index] || 'monthly';
            const convertedPrice = Math.round(basePrices[planType] * rate);
            
            if (country.currency === 'JPY') {
                element.innerHTML = `${country.symbol}${convertedPrice.toLocaleString()}<span>/month</span>`;
            } else {
                element.innerHTML = `${country.symbol}${convertedPrice}<span>/month</span>`;
            }
        });
    }

    initPasswordStrength() {
        const passwordInput = document.getElementById('password');
        const strengthBar = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');

        if (passwordInput && strengthBar && strengthText) {
            passwordInput.addEventListener('input', (e) => {
                const password = e.target.value;
                const strength = this.calculatePasswordStrength(password);
                this.updatePasswordStrength(strength, strengthBar, strengthText);
            });
        }
    }

    calculatePasswordStrength(password) {
        let score = 0;
        let feedback = [];

        if (password.length >= 8) score += 1;
        else feedback.push('at least 8 characters');

        if (/[a-z]/.test(password)) score += 1;
        else feedback.push('lowercase letter');

        if (/[A-Z]/.test(password)) score += 1;
        else feedback.push('uppercase letter');

        if (/\d/.test(password)) score += 1;
        else feedback.push('number');

        if (/[@$!%*?&]/.test(password)) score += 1;
        else feedback.push('special character');

        const levels = ['weak', 'weak', 'fair', 'good', 'strong'];
        const level = levels[score] || 'weak';

        return {
            score,
            level,
            feedback: feedback.length > 0 ? `Missing: ${feedback.join(', ')}` : 'Strong password!'
        };
    }

    updatePasswordStrength(strength, strengthBar, strengthText) {
        strengthBar.className = `strength-fill ${strength.level}`;
        strengthText.textContent = strength.feedback;
    }

    initPricingCards() {
        // Set default selection to "Most Popular" plan
        const popularCard = document.querySelector('.pricing-card.popular');
        if (popularCard) {
            this.selectPricingCard(popularCard);
        }
    }

    selectPricingCard(selectedCard) {
        // Remove selection from all cards
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to clicked card
        selectedCard.classList.add('selected');

        // Update hidden input value
        const planInput = document.getElementById('selectedPlan');
        if (planInput) {
            planInput.value = selectedCard.dataset.plan;
        }

        // Update CTA button text based on selection
        this.updateCTAButton(selectedCard.dataset.plan);
    }

    updateCTAButton(plan) {
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            // For demo, always show "Start Free Trial"
            ctaButton.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M3 12h6m6 0h6"/>
                </svg>
                Start 7-Day Free Trial
            `;
        }
    }

    initCustomInputs() {
        // Handle custom radio buttons
        const radioOptions = document.querySelectorAll('.radio-option');
        radioOptions.forEach(option => {
            option.addEventListener('click', () => {
                const input = option.querySelector('input[type="radio"]');
                if (input) {
                    input.checked = true;
                    this.clearFieldError(input);
                }
            });
        });

        // Handle custom checkboxes
        const checkboxOptions = document.querySelectorAll('.checkbox-option');
        checkboxOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') {
                    const input = option.querySelector('input[type="checkbox"]');
                    if (input) {
                        input.checked = !input.checked;
                        this.clearFieldError(input);
                    }
                }
            });
        });
    }

    initFormValidation() {
        // Add validation styling
        const style = document.createElement('style');
        style.textContent = `
            .field-error.show {
                display: block !important;
            }
            .form-group.error input,
            .form-group.error select {
                border-color: var(--error-red);
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
            }
        `;
        document.head.appendChild(style);
    }

    initSocialButtons() {
        const googleBtn = document.querySelector('.social-btn[data-provider="google"]');
        const appleBtn = document.querySelector('.social-btn[data-provider="apple"]');

        if (googleBtn) {
            googleBtn.addEventListener('click', () => this.handleSocialSignup('google'));
        }

        if (appleBtn) {
            appleBtn.addEventListener('click', () => this.handleSocialSignup('apple'));
        }
    }

    handleSocialSignup(provider) {
        // Show loading state
        const button = document.querySelector(`.social-btn[data-provider="${provider}"]`);
        if (button) {
            button.classList.add('loading');
            button.innerHTML = `
                <svg class="animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Connecting...
            `;

            // Simulate social login process
            setTimeout(() => {
                alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} sign-up would be implemented here`);
                button.classList.remove('loading');
                this.resetSocialButton(button, provider);
            }, 2000);
        }
    }

    resetSocialButton(button, provider) {
        const icons = {
            google: `<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`,
            apple: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`
        };

        button.innerHTML = `${icons[provider]} Sign up with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`;
    }

    validateField(field) {
        const fieldName = field.name || field.id;
        const rule = this.validationRules[fieldName];
        
        if (!rule) return true;

        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required validation
        if (rule.required && !value) {
            isValid = false;
            errorMessage = rule.message || `${fieldName} is required`;
        }

        // Pattern validation
        if (isValid && value && rule.pattern && !rule.pattern.test(value)) {
            isValid = false;
            errorMessage = rule.message;
        }

        // Min length validation
        if (isValid && value && rule.minLength && value.length < rule.minLength) {
            isValid = false;
            errorMessage = rule.message || `${fieldName} must be at least ${rule.minLength} characters`;
        }

        // Match validation (for confirm password)
        if (isValid && rule.match) {
            const matchField = document.getElementById(rule.match);
            if (matchField && value !== matchField.value) {
                isValid = false;
                errorMessage = rule.message;
            }
        }

        // Checkbox validation
        if (field.type === 'checkbox' && rule.required && !field.checked) {
            isValid = false;
            errorMessage = rule.message;
        }

        this.showFieldError(field, isValid ? '' : errorMessage);
        return isValid;
    }

    validatePasswordMatch() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        if (password && confirmPassword && confirmPassword.value) {
            const isValid = password.value === confirmPassword.value;
            this.showFieldError(confirmPassword, isValid ? '' : 'Passwords do not match');
            return isValid;
        }
        return true;
    }

    showFieldError(field, message) {
        const formGroup = field.closest('.form-group') || field.closest('.checkbox-option');
        if (!formGroup) return;

        let errorElement = formGroup.querySelector('.field-error');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            formGroup.appendChild(errorElement);
        }

        if (message) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
            formGroup.classList.add('error');
        } else {
            errorElement.classList.remove('show');
            formGroup.classList.remove('error');
        }
    }

    clearFieldError(field) {
        const formGroup = field.closest('.form-group') || field.closest('.checkbox-option');
        if (formGroup) {
            const errorElement = formGroup.querySelector('.field-error');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
            formGroup.classList.remove('error');
        }
    }

    validateForm() {
        let isValid = true;
        const requiredFields = this.form.querySelectorAll('input[required], select[required]');
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        // Validate custom required fields
        const termsCheckbox = document.getElementById('terms');
        if (termsCheckbox && !termsCheckbox.checked) {
            this.showFieldError(termsCheckbox, 'You must agree to the Terms & Conditions');
            isValid = false;
        }

        // Validate selected plan
        const selectedPlan = document.querySelector('.pricing-card.selected');
        if (!selectedPlan) {
            alert('Please select a pricing plan');
            isValid = false;
        }

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            // Scroll to first error
            const firstError = document.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Show loading state
        const submitButton = this.form.querySelector('.cta-button');
        const originalContent = submitButton.innerHTML;
        
        submitButton.classList.add('loading');
        submitButton.innerHTML = `
            <svg class="animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Creating Account...
        `;

        // Get form data
        const formData = new FormData(this.form);
        const userData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            restaurantName: formData.get('restaurantName'),
            businessType: formData.get('businessType'),
            outlets: formData.get('outlets'),
            country: formData.get('country')
        };

        // Create Firebase user and save to Firestore
        this.createUserAccount(userData, submitButton, originalContent);
    }

    async createUserAccount(userData, submitButton, originalContent) {
        try {
            // 1. Create user with Firebase Authentication
            const userCredential = await window.firebaseCreateUser(
                window.firebaseAuth, 
                userData.email, 
                userData.password
            );
            
            const user = userCredential.user;
            const restaurantId = user.uid; // Use Firebase UID as restaurant ID

            // 2. Save restaurant data to Firestore
            const restaurantData = {
                restaurant_id: restaurantId,
                restaurant_name: userData.restaurantName,
                owner_name: userData.fullName,
                email: userData.email,
                phone: userData.phone,
                country: userData.country,
                business_type: userData.businessType,
                number_of_outlets: parseInt(userData.outlets),
                tenant_id: restaurantId, // Same as restaurant_id for multi-tenancy
                created_at: window.firebaseServerTimestamp(),
                status: 'active'
            };

            // Save to Firestore under "restaurants" collection
            await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, 'restaurants', restaurantId), restaurantData);

            // Success - show success message
            this.showSuccessMessage();
            
            // Reset loading state
            submitButton.classList.remove('loading');
            submitButton.innerHTML = originalContent;

            // Redirect after delay
            setTimeout(() => {
                window.location.href = '/dashboard.html'; // Redirect to dashboard
            }, 2000);

        } catch (error) {
            console.error('Error creating account:', error);
            
            // Reset loading state
            submitButton.classList.remove('loading');
            submitButton.innerHTML = originalContent;
            
            // Show error message
            this.showErrorMessage(error);
        }
    }

    showSuccessMessage() {
        // Create success notification
        const successDiv = document.createElement('div');
        successDiv.className = 'success-notification';
        successDiv.innerHTML = `
            <div class="success-content">
                <svg class="success-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>Account Created Successfully!</h3>
                <p>Welcome to Scratchfy! Redirecting to your dashboard...</p>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    showErrorMessage(error) {
        let errorMessage = 'An error occurred while creating your account. Please try again.';
        
        // Handle specific Firebase errors
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'An account with this email already exists. Please use a different email or try signing in.';
        } else if (error.code === 'auth/weak-password') {
            errorMessage = 'Password is too weak. Please choose a stronger password.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Please enter a valid email address.';
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = 'Network error. Please check your internet connection and try again.';
        }

        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.innerHTML = `
            <div class="error-content">
                <svg class="error-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>Registration Failed</h3>
                <p>${errorMessage}</p>
                <button class="error-close" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 5000);
    }

    // Set up real-time pricing updates
    setupPricingUpdates() {
        try {
            if (!window.db) {
                console.warn('Firestore not initialized, skipping real-time pricing updates');
                return;
            }

            // Listen for changes to the plans collection
            const plansCollection = window.db.collection('plans');
            plansCollection.onSnapshot((snapshot) => {
                console.log('Pricing data updated, refreshing register page pricing...');
                // Re-render pricing with current country
                const countrySelect = document.getElementById('country');
                if (countrySelect && countrySelect.value) {
                    const selectedCountry = this.countries.find(c => c.code === countrySelect.value);
                    if (selectedCountry) {
                        this.updatePricingCurrency(selectedCountry);
                    }
                }
            }, (error) => {
                console.error('Error listening to pricing updates:', error);
            });
        } catch (error) {
            console.error('Error setting up pricing updates:', error);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RegisterForm();
});

// Add CSS animations
const animationStyles = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    .loading {
        opacity: 0.7;
        pointer-events: none;
    }
    
    /* Success and Error Notification Styles */
    .success-notification,
    .error-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease-out;
    }
    
    .success-notification {
        border-left: 4px solid #10b981;
    }
    
    .error-notification {
        border-left: 4px solid #ef4444;
    }
    
    .success-content,
    .error-content {
        padding: 20px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }
    
    .success-icon,
    .error-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        margin-top: 2px;
    }
    
    .success-icon {
        color: #10b981;
    }
    
    .error-icon {
        color: #ef4444;
    }
    
    .success-content h3,
    .error-content h3 {
        margin: 0 0 4px 0;
        font-size: 16px;
        font-weight: 600;
        color: #1f2937;
    }
    
    .success-content p,
    .error-content p {
        margin: 0 0 12px 0;
        font-size: 14px;
        color: #6b7280;
        line-height: 1.4;
    }
    
    .error-close {
        background: #ef4444;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    .error-close:hover {
        background: #dc2626;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);