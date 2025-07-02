// Lovable Marketing Tutorial JavaScript

// Application data
const appData = {
    // Checkatrade-specific prompt templates
    checkatrade_prompts: {
        'trade-category': {
            base: "Create a professional landing page for {trade_type} services in {location}. The page should feature Checkatrade branding with primary blue (#0058a2) and accent red (#eb1f40) colors, using Open Sans font throughout. Include a hero section highlighting '{campaign_name}', customer testimonials with star ratings, a clear '{cta}' button, and sections showcasing vetted tradespeople with their qualifications and customer reviews.",
            features: {
                reviews: " Add a prominent reviews section with verified customer feedback and 5-star rating system.",
                guarantees: " Include work guarantee badges and insurance coverage information.",
                insurance: " Display comprehensive vetting process details and insurance verification.",
                emergency: " Feature 24/7 emergency service availability with priority booking.",
                mobile: " Ensure fully responsive mobile-first design with touch-friendly navigation."
            }
        },
        'local-seo': {
            base: "Build a local SEO microsite for {trade_type} services targeting '{location}'. Use Checkatrade's blue (#0058a2) and red (#eb1f40) brand colors with Open Sans typography. Structure the site with location-specific content for '{campaign_name}', local trade directory, service area maps, and optimized meta descriptions. Include '{cta}' conversion points throughout.",
            features: {
                reviews: " Integrate location-based customer reviews and ratings for local credibility.",
                guarantees: " Highlight local work guarantees and service commitments.",
                insurance: " Show detailed vetting information for local tradespeople.",
                emergency: " Promote local emergency services with fast response times.",
                mobile: " Optimize for mobile local search with click-to-call functionality."
            }
        },
        'quote-calculator': {
            base: "Design an interactive quote calculator for {trade_type} services related to '{campaign_name}' in {location}. Apply Checkatrade branding (#0058a2 blue, #eb1f40 red) with Open Sans fonts. Create step-by-step input forms for project details, instant price estimates, and lead capture functionality. End with '{cta}' to connect with verified local tradespeople.",
            features: {
                reviews: " Show ratings and reviews for recommended tradespeople in price results.",
                guarantees: " Display work guarantee options with different coverage levels.",
                insurance: " Include insurance verification status for quoted tradespeople.",
                emergency: " Offer emergency service pricing and availability options.",
                mobile: " Ensure smooth mobile calculator experience with large input buttons."
            }
        },
        'signup-funnel': {
            base: "Create a multi-step registration funnel for {trade_type} professionals to join Checkatrade for '{campaign_name}'. Use brand colors (#0058a2 blue, #eb1f40 red) and Open Sans typography. Include benefit highlights, membership tiers, vetting process explanation, and cost calculator. Target {location} market with localized content and strong '{cta}' at each step.",
            features: {
                reviews: " Showcase success stories and reviews from existing members.",
                guarantees: " Explain membership guarantees and support commitments.",
                insurance: " Detail insurance requirements and verification process.",
                emergency: " Highlight emergency call-out opportunities and premium rates.",
                mobile: " Create mobile-optimized signup flow with progress indicators."
            }
        },
        'seasonal': {
            base: "Build a seasonal campaign page for '{campaign_name}' targeting {trade_type} services in {location}. Incorporate Checkatrade branding (#0058a2, #eb1f40) with Open Sans fonts. Feature seasonal service needs, limited-time offers, vetted tradesperson availability, and urgent booking system. Emphasize seasonal expertise and '{cta}' for immediate action.",
            features: {
                reviews: " Include seasonal service reviews and customer satisfaction scores.",
                guarantees: " Highlight seasonal work guarantees and weather-related coverage.",
                insurance: " Show comprehensive insurance for seasonal work risks.",
                emergency: " Promote emergency seasonal services (heating, storm damage, etc.).",
                mobile: " Optimize for mobile booking during seasonal emergencies."
            }
        }
    },
    example_prompts: [
        {
            title: "Local Plumber Landing Page",
            prompt: "Create a professional landing page for emergency plumbing services in Manchester. The page should feature Checkatrade branding with primary blue (#0058a2) and accent red (#eb1f40) colors, using Open Sans font throughout. Include a hero section highlighting 'Emergency Plumbing Response', customer testimonials with star ratings, a clear 'Get Emergency Quote' button, and sections showcasing vetted plumbers with their qualifications and customer reviews. Feature 24/7 emergency service availability with priority booking. Include comprehensive vetting process details and insurance verification. Ensure fully responsive mobile-first design with touch-friendly navigation and click-to-call functionality."
        },
        {
            title: "Trade Sign-up Funnel",
            prompt: "Create a multi-step registration funnel for electrician professionals to join Checkatrade for 'Electrical Services Partnership Program'. Use brand colors (#0058a2 blue, #eb1f40 red) and Open Sans typography. Include benefit highlights, membership tiers, vetting process explanation, and cost calculator. Target London market with localized content and strong 'Join Checkatrade' at each step. Showcase success stories and reviews from existing members. Detail insurance requirements and verification process. Create mobile-optimized signup flow with progress indicators."
        },
        {
            title: "Quote Calculator Tool",
            prompt: "Design an interactive quote calculator for bathroom fitting services related to 'Bathroom Renovation Calculator' in Birmingham. Apply Checkatrade branding (#0058a2 blue, #eb1f40 red) with Open Sans fonts. Create step-by-step input forms for project details, instant price estimates, and lead capture functionality. End with 'Find Local Bathroom Fitters' to connect with verified local tradespeople. Show ratings and reviews for recommended tradespeople in price results. Display work guarantee options with different coverage levels. Ensure smooth mobile calculator experience with large input buttons."
        }
    ],
    marketing_use_cases: [
        {
            title: "Landing Pages",
            description: "High-converting pages for campaigns",
            time_traditional: "120 hours",
            time_lovable: "15 minutes",
            cost_savings: "$12,000",
            credits: 1
        },
        {
            title: "Lead Generation Tools",
            description: "Interactive calculators and assessments",
            time_traditional: "200 hours",
            time_lovable: "20 minutes",
            cost_savings: "$20,000",
            credits: 2
        },
        {
            title: "Campaign Dashboards",
            description: "Real-time performance tracking",
            time_traditional: "160 hours",
            time_lovable: "25 minutes",
            cost_savings: "$16,000",
            credits: 2
        },
        {
            title: "Event Registration",
            description: "Professional event signup pages",
            time_traditional: "80 hours",
            time_lovable: "10 minutes",
            cost_savings: "$8,000",
            credits: 1
        },
        {
            title: "A/B Testing Tools",
            description: "Split testing platforms",
            time_traditional: "40 hours",
            time_lovable: "8 minutes",
            cost_savings: "$4,000",
            credits: 1
        },
        {
            title: "ROI Calculators",
            description: "Value demonstration tools",
            time_traditional: "180 hours",
            time_lovable: "18 minutes",
            cost_savings: "$18,000",
            credits: 2
        }
    ],
    prompt_templates: [
        {
            category: "Landing Page",
            template: "Create a landing page for [CAMPAIGN] that includes a hero section with [VALUE_PROP], email capture form, [SOCIAL_PROOF], and [CTA]. Use [BRAND_COLORS] and ensure mobile responsiveness."
        },
        {
            category: "Dashboard",
            template: "Build a marketing dashboard tracking [METRICS] from [DATA_SOURCES]. Include interactive charts, filtering options, and export capabilities. Design should be clean and professional."
        },
        {
            category: "Lead Tool",
            template: "Design a [TOOL_TYPE] for [TARGET_AUDIENCE] that helps them [VALUE_PROVIDED]. Include lead capture after they get results and integrate with [EMAIL_PLATFORM]."
        },
        {
            category: "Event Page",
            template: "Create an event registration page for [EVENT_NAME] with speaker bios, agenda, countdown timer, and [PAYMENT_TYPE] integration. Include social sharing and calendar integration."
        }
    ],
    credit_tips: [
        "Plan your app structure before starting",
        "Use the knowledge base for brand consistency",
        "Start with templates when available",
        "Make incremental changes vs. complete rebuilds",
        "Leverage built-in integrations"
    ],
    quiz_questions: [
        {
            question: "How much time can Lovable save on building a landing page?",
            options: ["50%", "80%", "99.8%", "95%"],
            correct: 2,
            explanation: "Lovable saves 99.8% of development time - reducing 120 hours to just 15 minutes!"
        },
        {
            question: "How many free credits do you get daily with Lovable?",
            options: ["3", "5", "10", "Unlimited"],
            correct: 1,
            explanation: "You get 5 free credits daily, which is enough to build multiple marketing tools!"
        },
        {
            question: "What's the best strategy for maximizing your credits?",
            options: ["Build everything at once", "Plan your structure first", "Use random prompts", "Skip templates"],
            correct: 1,
            explanation: "Planning your app structure before starting helps you use credits efficiently and get better results."
        },
        {
            question: "How long does it take to build a lead generation tool with Lovable?",
            options: ["2 hours", "20 minutes", "1 week", "5 hours"],
            correct: 1,
            explanation: "A lead generation tool takes about 20 minutes with Lovable vs 200 hours traditionally!"
        }
    ]
};

// State management
let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswers = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderUseCases();
    renderCreditTips();
    setupEventListeners();
    updatePromptTemplate();
    calculateROI();
}

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Render use cases dynamically
function renderUseCases() {
    const container = document.getElementById('use-cases-grid');
    if (!container) return;
    
    container.innerHTML = appData.marketing_use_cases.map(useCase => `
        <div class="use-case-card">
            <div class="use-case-header">
                <h3>${useCase.title}</h3>
                <p>${useCase.description}</p>
            </div>
            <div class="use-case-body">
                <div class="use-case-stats">
                    <div class="use-case-stat">
                        <span class="use-case-stat-value">${useCase.time_traditional}</span>
                        <span class="use-case-stat-label">Traditional</span>
                    </div>
                    <div class="use-case-stat">
                        <span class="use-case-stat-value">${useCase.time_lovable}</span>
                        <span class="use-case-stat-label">With Lovable</span>
                    </div>
                    <div class="use-case-stat">
                        <span class="use-case-stat-value">${useCase.cost_savings}</span>
                        <span class="use-case-stat-label">Savings</span>
                    </div>
                    <div class="use-case-stat">
                        <span class="use-case-stat-value">${useCase.credits} ${useCase.credits === 1 ? 'Credit' : 'Credits'}</span>
                        <span class="use-case-stat-label">Required</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render credit optimization tips
function renderCreditTips() {
    const container = document.getElementById('credit-tips-list');
    if (!container) return;
    
    container.innerHTML = appData.credit_tips.map(tip => `
        <li>${tip}</li>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Credit calculator
    const projectType = document.getElementById('project-type');
    const projectCount = document.getElementById('project-count');
    
    if (projectType && projectCount) {
        projectType.addEventListener('change', updateCreditCalculation);
        projectCount.addEventListener('input', updateCreditCalculation);
    }
    
    // Prompt template builder
    const templateCategory = document.getElementById('template-category');
    if (templateCategory) {
        templateCategory.addEventListener('change', updatePromptTemplate);
    }
    
    // ROI calculator
    const projectsPerMonth = document.getElementById('projects-per-month');
    const hourlyRate = document.getElementById('hourly-rate');
    
    if (projectsPerMonth && hourlyRate) {
        projectsPerMonth.addEventListener('input', calculateROI);
        hourlyRate.addEventListener('input', calculateROI);
    }
}

// Credit calculator functionality
function updateCreditCalculation() {
    const projectType = document.getElementById('project-type');
    const projectCount = document.getElementById('project-count');
    const creditsNeeded = document.getElementById('credits-needed');
    const daysNeeded = document.getElementById('days-needed');
    
    if (!projectType || !projectCount || !creditsNeeded || !daysNeeded) return;
    
    const creditsPerProject = parseInt(projectType.value);
    const numberOfProjects = parseInt(projectCount.value) || 1;
    const totalCredits = creditsPerProject * numberOfProjects;
    const dailyCredits = 5;
    const daysRequired = Math.ceil(totalCredits / dailyCredits);
    
    creditsNeeded.textContent = totalCredits;
    daysNeeded.textContent = daysRequired;
    
    // Update visual feedback
    const resultDisplays = document.querySelectorAll('.result-display');
    resultDisplays.forEach(display => {
        const creditStatus = totalCredits <= 5 ? 'low' : totalCredits <= 10 ? 'medium' : 'high';
        display.className = `result-display credit-status--${creditStatus}`;
    });
}

// Prompt template builder
function updatePromptTemplate() {
    const categorySelect = document.getElementById('template-category');
    const promptOutput = document.getElementById('prompt-output');
    
    if (!categorySelect || !promptOutput) return;
    
    const selectedCategory = categorySelect.value;
    const template = appData.prompt_templates.find(t => t.category === selectedCategory);
    
    if (template) {
        promptOutput.value = template.template;
    }
}

function showPromptBuilder() {
    showSection('tools');
    // Scroll to prompt builder
    setTimeout(() => {
        const promptBuilder = document.getElementById('prompt-builder');
        if (promptBuilder) {
            promptBuilder.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
}

function copyPrompt() {
    const promptOutput = document.getElementById('prompt-output');
    if (!promptOutput) return;
    
    promptOutput.select();
    document.execCommand('copy');
    
    // Show feedback
    const button = document.querySelector('[onclick="copyPrompt()"]');
    if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'var(--color-success)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }
}

// ROI Calculator
function calculateROI() {
    const projectsPerMonth = document.getElementById('projects-per-month');
    const hourlyRate = document.getElementById('hourly-rate');
    const monthlySavings = document.getElementById('monthly-savings');
    const annualSavings = document.getElementById('annual-savings');
    
    if (!projectsPerMonth || !hourlyRate || !monthlySavings || !annualSavings) return;
    
    const projects = parseInt(projectsPerMonth.value) || 2;
    const rate = parseInt(hourlyRate.value) || 100;
    
    // Average time savings across all use cases (approximate)
    const avgTimeSavingsHours = 120; // Average traditional time
    const monthlySavingsValue = projects * avgTimeSavingsHours * rate;
    const annualSavingsValue = monthlySavingsValue * 12;
    
    monthlySavings.textContent = `$${monthlySavingsValue.toLocaleString()}`;
    annualSavings.textContent = `$${annualSavingsValue.toLocaleString()}`;
}

// Quiz functionality
function startQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    quizAnswers = [];
    showQuizQuestion();
    document.getElementById('quiz-modal').classList.add('active');
}

function showQuizQuestion() {
    const quizContent = document.getElementById('quiz-content');
    if (!quizContent || currentQuizQuestion >= appData.quiz_questions.length) {
        showQuizResults();
        return;
    }
    
    const question = appData.quiz_questions[currentQuizQuestion];
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <h4>Question ${currentQuizQuestion + 1} of ${appData.quiz_questions.length}</h4>
            <p><strong>${question.question}</strong></p>
            <div class="quiz-options" id="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectQuizOption(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="quiz-actions" style="margin-top: 20px; text-align: center;">
                <button class="btn btn--secondary" onclick="submitQuizAnswer()" id="submit-btn" style="display: none;">
                    Submit Answer
                </button>
            </div>
        </div>
    `;
}

function selectQuizOption(optionIndex) {
    // Remove previous selections
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Select current option
    options[optionIndex].classList.add('selected');
    
    // Show submit button
    document.getElementById('submit-btn').style.display = 'inline-block';
    
    // Store selection
    quizAnswers[currentQuizQuestion] = optionIndex;
}

function submitQuizAnswer() {
    const question = appData.quiz_questions[currentQuizQuestion];
    const selectedAnswer = quizAnswers[currentQuizQuestion];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        quizScore++;
    }
    
    // Show correct answer
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Show explanation and next button
    const quizContent = document.getElementById('quiz-content');
    const explanationDiv = document.createElement('div');
    explanationDiv.innerHTML = `
        <div style="margin-top: 20px; padding: 16px; background: var(--color-secondary); border-radius: var(--radius-base);">
            <p><strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong> ${question.explanation}</p>
        </div>
        <div style="margin-top: 20px; text-align: center;">
            <button class="btn btn--primary" onclick="nextQuizQuestion()">
                ${currentQuizQuestion < appData.quiz_questions.length - 1 ? 'Next Question' : 'View Results'}
            </button>
        </div>
    `;
    
    quizContent.appendChild(explanationDiv);
    
    // Hide submit button
    document.getElementById('submit-btn').style.display = 'none';
}

function nextQuizQuestion() {
    currentQuizQuestion++;
    showQuizQuestion();
}

function showQuizResults() {
    const percentage = Math.round((quizScore / appData.quiz_questions.length) * 100);
    let message = '';
    let encouragement = '';
    
    if (percentage >= 75) {
        message = 'Excellent! 🎉';
        encouragement = "You're ready to maximize your Lovable credits and build amazing marketing tools!";
    } else if (percentage >= 50) {
        message = 'Good job! 👍';
        encouragement = "You understand the basics. Review the tutorial sections to boost your knowledge!";
    } else {
        message = 'Keep learning! 📚';
        encouragement = "Go through the tutorial again to master Lovable for marketing success!";
    }
    
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div style="text-align: center;">
            <h3>${message}</h3>
            <div style="font-size: 48px; margin: 20px 0;">${percentage}%</div>
            <p>You scored ${quizScore} out of ${appData.quiz_questions.length} questions correctly.</p>
            <p>${encouragement}</p>
            <div style="margin-top: 30px;">
                <button class="btn btn--primary" onclick="closeQuiz()">Start Building</button>
                <button class="btn btn--secondary" onclick="startQuiz()" style="margin-left: 10px;">Retake Quiz</button>
            </div>
        </div>
    `;
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.remove('active');
}

// Utility functions
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize credit calculation on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        updateCreditCalculation();
    }, 100);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add keyboard navigation for sections (updated order)
document.addEventListener('keydown', function(e) {
    if (e.altKey) {
        const sections = ['tutorial', 'quick-start', 'tools', 'use-cases', 'credit-manager'];
        const currentSectionIndex = sections.findIndex(section => 
            document.getElementById(section).classList.contains('active')
        );
        
        if (e.key === 'ArrowRight' && currentSectionIndex < sections.length - 1) {
            showSection(sections[currentSectionIndex + 1]);
            e.preventDefault();
        } else if (e.key === 'ArrowLeft' && currentSectionIndex > 0) {
            showSection(sections[currentSectionIndex - 1]);
            e.preventDefault();
        }
    }
});

// Checkatrade Prompt Generator Functions
let currentCampaignType = 'trade-category';

function selectCampaignType(type) {
    currentCampaignType = type;
    
    // Update button states
    document.querySelectorAll('.campaign-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        }
    });
    
    // Generate new prompt with current inputs
    generatePrompt();
}

function generatePrompt() {
    const campaignName = document.getElementById('campaign-name')?.value || '';
    const targetLocation = document.getElementById('target-location')?.value || '';
    const tradeType = document.getElementById('trade-type')?.value || '';
    const ctaType = document.getElementById('cta-type')?.value || 'Get Quote';
    
    // Get selected features
    const features = [];
    const featureCheckboxes = {
        'feature-reviews': 'reviews',
        'feature-guarantees': 'guarantees', 
        'feature-insurance': 'insurance',
        'feature-emergency': 'emergency',
        'feature-mobile': 'mobile'
    };
    
    Object.entries(featureCheckboxes).forEach(([id, feature]) => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked) {
            features.push(feature);
        }
    });
    
    // Generate prompt if we have required fields
    if (campaignName && targetLocation && tradeType) {
        const template = appData.checkatrade_prompts[currentCampaignType];
        let prompt = template.base
            .replace('{campaign_name}', campaignName)
            .replace('{location}', targetLocation)
            .replace('{trade_type}', tradeType)
            .replace('{cta}', ctaType);
        
        // Add selected features
        features.forEach(feature => {
            if (template.features[feature]) {
                prompt += template.features[feature];
            }
        });
        
        // Add final touch for professionalism
        prompt += " Ensure the site loads quickly, is fully accessible, and includes clear contact information with trust signals like verified badges and customer service details.";
        
        document.getElementById('generated-prompt').value = prompt;
    } else {
        // Show placeholder or helper text
        let missingFields = [];
        if (!campaignName) missingFields.push('Campaign Name');
        if (!targetLocation) missingFields.push('Target Location');
        if (!tradeType) missingFields.push('Trade Type');
        
        const placeholder = missingFields.length > 0 
            ? `Please fill in the following required fields to generate your prompt: ${missingFields.join(', ')}`
            : 'Fill in the required fields above to generate your custom Checkatrade prompt...';
            
        document.getElementById('generated-prompt').value = '';
        document.getElementById('generated-prompt').placeholder = placeholder;
    }
}

function copyGeneratedPrompt() {
    const promptTextarea = document.getElementById('generated-prompt');
    const copyBtn = document.getElementById('copy-prompt-btn');
    
    if (!promptTextarea.value.trim()) {
        return;
    }
    
    // Select and copy text
    promptTextarea.select();
    promptTextarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show success feedback
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="copy-icon">✓</span>Copied!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.classList.remove('copied');
        }, 2000);
        
    } catch (err) {
        // Fallback for browsers that don't support execCommand
        navigator.clipboard.writeText(promptTextarea.value).then(() => {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span class="copy-icon">✓</span>Copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            alert('Please manually copy the prompt text');
        });
    }
}

function copyExamplePrompt(index) {
    const examplePrompt = appData.example_prompts[index];
    if (!examplePrompt) return;
    
    // Copy to clipboard
    try {
        navigator.clipboard.writeText(examplePrompt.prompt).then(() => {
            // Find the button that was clicked
            const buttons = document.querySelectorAll('.example-copy-btn');
            const button = buttons[index];
            
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = examplePrompt.prompt;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            const buttons = document.querySelectorAll('.example-copy-btn');
            const button = buttons[index];
            
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }
        });
    } catch (err) {
        alert('Please manually copy the example prompt');
    }
}

// Initialize the prompt generator when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners for the new prompt generator
    const campaignName = document.getElementById('campaign-name');
    const targetLocation = document.getElementById('target-location');
    const tradeType = document.getElementById('trade-type');
    const ctaType = document.getElementById('cta-type');
    
    if (campaignName) {
        campaignName.addEventListener('input', debounce(generatePrompt, 300));
    }
    if (targetLocation) {
        targetLocation.addEventListener('input', debounce(generatePrompt, 300));
    }
    if (tradeType) {
        tradeType.addEventListener('change', generatePrompt);
    }
    if (ctaType) {
        ctaType.addEventListener('change', generatePrompt);
    }
    
    // Set up feature checkbox listeners
    const featureCheckboxes = ['feature-reviews', 'feature-guarantees', 'feature-insurance', 'feature-emergency', 'feature-mobile'];
    featureCheckboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.addEventListener('change', generatePrompt);
        }
    });
    
    // Initialize with default campaign type
    selectCampaignType('trade-category');
});

// Add click outside to close modal
document.addEventListener('click', function(e) {
    const modal = document.getElementById('quiz-modal');
    if (e.target === modal) {
        closeQuiz();
    }
});

// Performance optimization: Lazy load heavy content
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.card, .use-case-card, .tutorial-card, .step-card');
        cards.forEach(card => observer.observe(card));
    }, 500);
});