import React, { useState, useEffect } from 'react';
import { Brain, BarChart3, Shield, TrendingUp, CheckCircle, Users, Award, Zap, Database, Cloud, LineChart, Star, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Sutatscode Ltd
                </h1>
                <p className="text-xs text-gray-600">Delivering IT Solutions Since 2019</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Expertise', 'Testimonials', 'Contact', 'Careers'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                🚀 AI Transformation Specialists
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Driving Digital Transformation with
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"> Intelligent AI Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Delivering AI transformation for organisations across healthcare, financial services, 
                and enterprise with proven expertise in regulatory compliance, data governance, and 
                intelligent automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Start Your AI Journey <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Explore Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Brain, label: "AI Adoption", color: "blue", section: "ai-adoption" },
                    { icon: BarChart3, label: "Business Analytics", color: "indigo", section: "business-analytics" },
                    { icon: Shield, label: "Data Resilience", color: "purple", section: "data-resilience" },
                    { icon: TrendingUp, label: "Strategic Consulting", color: "cyan", section: "strategic-consulting" }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(item.section)}
                      className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group`}
                    >
                      <item.icon className={`w-8 h-8 text-${item.color}-600 mb-3 group-hover:scale-110 transition-transform`} />
                      <p className="font-semibold text-gray-800">{item.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sutatscode Ltd</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Since 2019, Sutatscode Ltd has been at the forefront of delivering transformative IT solutions 
                  that bridge the gap between cutting-edge technology and practical business outcomes. Founded on 
                  principles of technical excellence and strategic insight, we've built a reputation for solving 
                  complex challenges in highly regulated environments.
                </p>
                <p>
                  Our founder brings over 10 years of experience across leading financial institutions including 
                  Lloyds Banking Group, Metro Bank, Sainsbury's Bank, and WPP, combined with deep expertise in 
                  market risk data, regulatory compliance, and technology transformation. This unique blend of 
                  financial services rigor and technical innovation positions us perfectly to serve both healthcare 
                  and enterprise sectors.
                </p>
                <p>
                  Today, we specialise in AI adoption, ambient voice technology, and intelligent automation that 
                  enhances operational efficiency while maintaining the highest standards of data governance and 
                  regulatory compliance. Our work spans NHS trusts, financial institutions, and enterprises seeking 
                  to harness the power of AI responsibly and effectively.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2019</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Expertise</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower organisations with AI-driven solutions that transform operations, enhance 
                  decision-making, and deliver measurable value while maintaining unwavering commitment 
                  to data security, compliance, and ethical AI practices.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {[
                    "Excellence in execution and delivery",
                    "Integrity in all client relationships",
                    "Innovation driven by practical outcomes",
                    "Compliance as a foundation, not an afterthought"
                  ].map((value, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Why We're Different</h3>
                <p>
                  We combine deep regulatory expertise from tier-1 financial institutions with cutting-edge 
                  AI capabilities, ensuring solutions that are not only innovative but also compliant, secure, 
                  and built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and data solutions tailored for healthcare and enterprise environments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Adoption & Integration",
                description: "Seamless implementation of ambient voice technology, generative AI, and agentic AI systems designed specifically for healthcare workflows and NHS requirements.",
                features: ["AVT Implementation", "Clinical Documentation", "AI Governance Frameworks"],
                section: "ai-adoption"
              },
              {
                icon: BarChart3,
                title: "Business & Data Analytics",
                description: "Transform raw data into actionable insights with advanced analytics, regulatory reporting expertise, and comprehensive business intelligence solutions.",
                features: ["Regulatory Reporting", "Performance Metrics", "Predictive Analytics"],
                section: "business-analytics"
              },
              {
                icon: Shield,
                title: "Data Resilience & Regulatory Compliance",
                description: "Comprehensive data governance frameworks ensuring compliance with FCA/PRA regulations, BCBS 239 principles, and NHS data standards. Expert implementation of resilient data architectures that meet the most stringent regulatory requirements while enabling business agility.",
                features: ["FCA/PRA Compliance Frameworks", "BCBS 239 Risk Data Aggregation", "Data Quality & Lineage", "Regulatory Reporting Excellence", "Stress Testing & Scenario Analysis", "Audit Trail Management"],
                section: "data-resilience"
              },
              {
                icon: Cloud,
                title: "Cloud Solutions - AWS & Azure",
                description: "Expert guidance on cloud migration, architecture design, and modernisation strategies across AWS and Azure platforms. AWS certified expertise combined with Azure stack proficiency delivers optimised, secure, and compliant cloud solutions.",
                features: ["AWS Solutions Architecture", "Azure Cloud Services", "Multi-Cloud Strategy", "Cloud Migration & Modernisation", "Cost Optimisation", "DevOps & Infrastructure as Code"],
                section: "services"
              },
              {
                icon: Users,
                title: "Strategic Consulting",
                description: "Over 10 years of experience delivering strategic insights, technology roadmaps, and transformation programs for financial services and healthcare sectors.",
                features: ["Technology Roadmaps", "Change Management", "Stakeholder Engagement"],
                section: "strategic-consulting"
              },
              {
                icon: Database,
                title: "Agentic AI Solutions",
                description: "Next-generation intelligent systems that autonomously manage workflows, optimise processes, and deliver real-time decision support for clinical and operational teams.",
                features: ["Workflow Automation", "Intelligent Agents", "Decision Support Systems"],
                section: "ai-adoption"
              }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(service.section)}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all group text-left w-full"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      
      {/* AI Adoption Detailed Section */}
      <section id="ai-adoption" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Adoption & Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your healthcare operations with cutting-edge AI solutions designed for the modern NHS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Ambient Voice Technology (AVT)
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Implement AI-powered voice recognition systems that capture clinical conversations in real-time, 
                    automatically generating accurate documentation while clinicians focus on patient care. Our AVT 
                    solutions integrate seamlessly with existing EPR systems and comply with NHS Digital standards.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Generative AI for Clinical Workflows
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Deploy GPT-4 and custom language models to automate clinical documentation, generate patient 
                    summaries, and provide decision support. Our solutions reduce documentation time by up to 40% 
                    while improving accuracy and consistency.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Agentic AI Systems
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Build intelligent agents that autonomously manage workflows, schedule appointments, triage 
                    patient inquiries, and coordinate care pathways. These systems learn from interactions and 
                    continuously improve performance.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack & Tools</h3>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white mb-6">
                <h4 className="font-semibold mb-4">Core Technologies</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    "OpenAI GPT-4",
                    "LangChain Framework",
                    "Python & Streamlit",
                    "Natural Language Processing",
                    "Speech Recognition APIs",
                    "Machine Learning Models",
                    "Azure Cognitive Services",
                    "Custom AI Agents"
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-4">Key Benefits for NHS Trusts</h4>
              <ul className="space-y-3">
                {[
                  "40% reduction in clinical documentation time",
                  "Improved accuracy and completeness of medical records",
                  "Enhanced patient-clinician interaction quality",
                  "GDPR and NHS data governance compliant",
                  "Seamless EPR system integration",
                  "Real-time clinical decision support",
                  "Reduced administrative burden on staff",
                  "Scalable across departments and specialties"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Methodology</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  phase: "Discovery",
                  description: "Clinical workflow analysis, stakeholder engagement, and requirement gathering",
                  duration: "2-4 weeks"
                },
                {
                  phase: "Design",
                  description: "AI solution architecture, data flow mapping, and integration planning",
                  duration: "3-4 weeks"
                },
                {
                  phase: "Pilot",
                  description: "Controlled deployment with selected department, training, and validation",
                  duration: "4-8 weeks"
                },
                {
                  phase: "Scale",
                  description: "Trust-wide rollout, continuous optimisation, and ongoing support",
                  duration: "Ongoing"
                }
              ].map((phase, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{idx + 1}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{phase.phase}</h4>
                  <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                  <div className="text-xs text-blue-600 font-semibold">{phase.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Analytics Detailed Section */}
      <section id="business-analytics" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business & Data Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn data into actionable insights that drive better clinical and operational decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <LineChart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive dashboards and reporting solutions that track KPIs, patient outcomes, operational 
                efficiency, and financial performance across your trust.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Real-time operational dashboards",
                  "Patient flow analytics",
                  "Clinical outcome tracking",
                  "Resource utilisation metrics",
                  "Financial performance indicators"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Reporting</h3>
              <p className="text-gray-700 mb-4">
                Expert implementation of regulatory reporting frameworks for NHS Digital submissions, CQC 
                requirements, and internal governance needs.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "NHS Digital returns",
                  "CQC compliance reporting",
                  "Clinical audit support",
                  "Quality indicator tracking",
                  "Automated report generation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-700 mb-4">
                Machine learning models that forecast demand, predict patient admissions, identify at-risk 
                populations, and optimise resource allocation.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Demand forecasting",
                  "Readmission risk prediction",
                  "Capacity planning models",
                  "Patient stratification",
                  "Early warning systems"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-600" />
                  Data Management & Engineering
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>• <strong>SQL Expertise:</strong> Complex query optimisation, stored procedures, data warehouse design</p>
                  <p>• <strong>MongoDB Studio 3T:</strong> NoSQL database design, aggregation pipelines, performance tuning</p>
                  <p>• <strong>Python Analytics:</strong> Pandas, NumPy, scikit-learn for data analysis and modeling</p>
                  <p>• <strong>ETL Pipelines:</strong> Data extraction, transformation, and loading automation</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  Visualisation & Reporting
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>• <strong>Power BI:</strong> Interactive dashboards, custom visuals, embedded analytics</p>
                  <p>• <strong>Tableau:</strong> Advanced visualisations and executive reporting</p>
                  <p>• <strong>Custom Dashboards:</strong> React-based interactive analytics applications</p>
                  <p>• <strong>Automated Reporting:</strong> Scheduled reports with intelligent alerting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Resilience Detailed Section */}
      <section id="data-resilience" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Resilience & Regulatory Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build robust data governance frameworks that meet the highest regulatory standards
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-2xl text-white mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Regulatory Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Financial Services Compliance</h4>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">FCA/PRA Frameworks</h5>
                    <p className="text-sm text-blue-100">
                      Deep experience implementing data governance and reporting frameworks that meet Financial 
                      Conduct Authority and Prudential Regulation Authority standards across tier-1 banking institutions.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">BCBS 239 Principles</h5>
                    <p className="text-sm text-blue-100">
                      Expert implementation of Basel Committee principles for effective risk data aggregation and 
                      reporting, ensuring data accuracy, completeness, and timeliness.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Market Risk Reporting</h5>
                    <p className="text-sm text-blue-100">
                      Specialised knowledge in stress testing, capital adequacy reporting, and regulatory submissions 
                      for market risk management.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Healthcare Data Governance</h4>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">NHS Data Standards</h5>
                    <p className="text-sm text-blue-100">
                      Comprehensive understanding of NHS Digital standards, Data Security and Protection Toolkit 
                      requirements, and clinical data governance frameworks.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">GDPR Compliance</h5>
                    <p className="text-sm text-blue-100">
                      Expert implementation of data protection measures, consent management, data minimisation 
                      principles, and right-to-be-forgotten workflows.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Clinical Data Quality</h5>
                    <p className="text-sm text-blue-100">
                      Robust data quality frameworks ensuring accuracy, completeness, consistency, and validity 
                      of clinical information across systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Data Governance</h3>
              <ul className="space-y-3">
                {[
                  "Data ownership & stewardship models",
                  "Policy and procedure frameworks",
                  "Data quality scorecards",
                  "Master data management",
                  "Metadata management",
                  "Data lineage tracking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Data Security</h3>
              <ul className="space-y-3">
                {[
                  "Encryption at rest and in transit",
                  "Access control & authentication",
                  "Audit trail implementation",
                  "Data masking & anonymisation",
                  "Breach detection & response",
                  "Security testing & validation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business Continuity</h3>
              <ul className="space-y-3">
                {[
                  "Disaster recovery planning",
                  "Backup and restore procedures",
                  "Data replication strategies",
                  "Failover testing",
                  "Recovery time objectives (RTO)",
                  "Recovery point objectives (RPO)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Consulting Detailed Section */}
      <section id="strategic-consulting" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance on technology strategy, digital transformation, and organisational change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Strategy & Roadmapping</h3>
              <p className="text-gray-700 mb-6">
                With over 10 years of experience across financial services and healthcare, we help organisations 
                develop comprehensive technology strategies aligned with business objectives.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Digital Transformation Roadmaps",
                    description: "Multi-year strategic plans for modernising technology infrastructure and capabilities"
                  },
                  {
                    title: "AI Adoption Strategy",
                    description: "Phased approach to implementing AI across clinical and operational workflows"
                  },
                  {
                    title: "Cloud Migration Planning",
                    description: "Detailed assessment and planning for AWS/Azure migration initiatives"
                  },
                  {
                    title: "Technology Due Diligence",
                    description: "Expert assessment of systems, architectures, and technical capabilities"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Analysis & Requirements</h3>
              <p className="text-gray-700 mb-6">
                Expert business analysis services that bridge the gap between business needs and technical solutions, 
                ensuring projects deliver measurable value.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Requirements Engineering",
                    description: "Comprehensive elicitation, documentation, and validation of business requirements"
                  },
                  {
                    title: "Process Optimisation",
                    description: "Analysis and redesign of workflows to improve efficiency and reduce waste"
                  },
                  {
                    title: "Stakeholder Management",
                    description: "Engagement strategies ensuring alignment across clinical, operational, and IT teams"
                  },
                  {
                    title: "Benefits Realisation",
                    description: "Framework for tracking and maximising ROI from technology investments"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Industry Experience & Credentials</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Financial Services Expertise</h4>
                <div className="space-y-3 text-blue-100">
                  <p>• <strong>Lloyds Banking Group:</strong> Market risk data, regulatory reporting, BCBS 239 compliance</p>
                  <p>• <strong>Metro Bank:</strong> Technology transformation, cloud migration, system integration</p>
                  <p>• <strong>Sainsbury's Bank:</strong> Data governance, quality frameworks, audit capabilities</p>
                  <p>• <strong>WPP:</strong> Business analysis, financial data workflows, reporting optimisation</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Technical Certifications & Skills</h4>
                <div className="space-y-3 text-blue-100">
                  <p>• <strong>AWS Certified:</strong> Cloud architecture and solution design expertise</p>
                  <p>• <strong>AI & Machine Learning:</strong> LangChain, OpenAI APIs, Python development</p>
                  <p>• <strong>Data Analytics:</strong> SQL, MongoDB, Python, Power BI, advanced analytics</p>
                  <p>• <strong>Methodologies:</strong> Agile, Waterfall, PRINCE2, business process modeling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Expertise */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regulatory Compliance & Data Resilience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise in FCA/PRA regulations and financial services data governance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                FCA/PRA Regulatory Framework
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our regulatory compliance expertise is built on years of hands-on experience implementing 
                data governance frameworks for tier-1 financial institutions. We ensure your systems meet 
                the rigorous standards set by the Financial Conduct Authority (FCA) and Prudential Regulation 
                Authority (PRA).
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Market Risk Regulatory Reporting
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">
                    Expert delivery of regulatory submissions including stress testing, capital adequacy 
                    reporting, and market risk metrics aligned with PRA Rulebook requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Data Quality Frameworks
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">
                    Implementation of robust data quality controls, validation rules, and reconciliation 
                    processes that meet FCA expectations for accurate and timely reporting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Regulatory Change Management
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">
                    Proactive monitoring and implementation of regulatory updates, ensuring systems 
                    remain compliant with evolving FCA/PRA requirements and industry standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-blue-200" />
                BCBS 239 Principles
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Comprehensive implementation of Basel Committee on Banking Supervision's Principles for 
                Effective Risk Data Aggregation and Risk Reporting (BCBS 239), ensuring your organisation 
                meets global standards for risk management infrastructure.
              </p>
              <div className="space-y-4">
                {[
                  {
                    principle: "Data Governance",
                    description: "Establishing clear ownership, accountability, and data quality standards across the organisation"
                  },
                  {
                    principle: "Data Architecture & IT Infrastructure",
                    description: "Designing resilient systems capable of aggregating risk data across business lines and legal entities"
                  },
                  {
                    principle: "Accuracy & Integrity",
                    description: "Implementing controls to ensure data is accurate, complete, and reconciled across systems"
                  },
                  {
                    principle: "Completeness & Timeliness",
                    description: "Ensuring risk data is comprehensive and delivered within required timeframes for effective decision-making"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">{item.principle}</h4>
                    <p className="text-sm text-blue-100">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Experience */}
          <div className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proven Financial Services Experience</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  institution: "Lloyds Banking Group",
                  focus: "Market Risk Data & Regulatory Reporting",
                  achievement: "Delivered BCBS 239 compliant risk aggregation frameworks"
                },
                {
                  institution: "Metro Bank",
                  focus: "Technology Transformation",
                  achievement: "Implemented cloud-based regulatory reporting solutions"
                },
                {
                  institution: "Sainsbury's Bank",
                  focus: "Data Quality & Governance",
                  achievement: "Enhanced data lineage and audit trail capabilities"
                },
                {
                  institution: "WPP",
                  focus: "Business Analysis",
                  achievement: "Optimised financial data workflows and reporting"
                }
              ].map((exp, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">{exp.institution}</h4>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{exp.focus}</p>
                  <p className="text-xs text-gray-600">{exp.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Statuscode</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Proven track record of delivering transformative solutions across healthcare and financial services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                number: "10+",
                label: "Years Experience",
                description: "Delivering excellence in business analysis and technology transformation"
              },
              {
                icon: Users,
                number: "50+",
                label: "Projects Delivered",
                description: "Successful implementations across financial services and healthcare"
              },
              {
                icon: TrendingUp,
                number: "100%",
                label: "Client Satisfaction",
                description: "Committed to exceeding expectations on every engagement"
              },
              {
                icon: Shield,
                number: "NHS",
                label: "Ready Partner",
                description: "Expertise in healthcare compliance and data governance"
              }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <stat.icon className="w-12 h-12 text-blue-200 mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">{stat.label}</div>
                <p className="text-sm text-blue-200">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Key Capabilities */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Technical Capabilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI & Machine Learning",
                  skills: ["Generative AI", "LangChain", "OpenAI APIs", "Agentic Systems", "NLP & Voice Recognition"]
                },
                {
                  title: "Data & Analytics",
                  skills: ["SQL & MongoDB", "Python Analytics", "Power BI", "Regulatory Reporting", "Data Quality Frameworks"]
                },
                {
                  title: "Cloud & Infrastructure",
                  skills: ["AWS Certified", "Cloud Migration", "DevOps Practices", "System Integration", "Security Compliance"]
                }
              ].map((category, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, sidx) => (
                      <li key={sidx} className="flex items-center gap-2 text-blue-100 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our partners who have experienced transformative results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rakesh Malik",
                role: "Technology Professional",
                company: "CEO Canary Solutions Ltd",
                testimonial: "Sutatscode's implementation of viable POC system for an AI driven logistics platform for my client has revolutionised their delivery process. The AI-driven solution reduced documentation time by 40% and also reduced licensing fee while improving accuracy. Their understanding of AI solutions bridged with technical expertise was exemplary.",
                rating: 5
              },
              {
                name: "Esosa Osakue",
                role: "Pharmacist and GPhC Specialist and (SME)",
                company: "Healthcare Professional",
                testimonial: "Working with Sutatscode on our regulatory reporting transformation was a game-changer. Their expertise in BCBS 239 compliance and data quality frameworks delivered a robust solution that exceeded FCA expectations. Outstanding technical depth and project delivery.",
                rating: 5
              },
              {
                name: "Goodluck Chikanya",
                role: "Senior Solutions Architect",
                company: "Major UK Bank",
                testimonial: "The business analytics and data resilience frameworks implemented by Sutatscode transformed our risk management capabilities. Their strategic approach combined technical excellence with deep industry knowledge. Truly exceptional consulting partner.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Focus Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <h2 className="text-3xl font-bold mb-6">Healthcare AI Transformation</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Specialised expertise in implementing ambient voice technology and AI solutions that meet the unique requirements of NHS trusts and healthcare organisations.
                </p>
                <div className="space-y-4">
                  {[
                    "Clinical documentation automation",
                    "Real-time patient interaction analysis",
                    "GDPR and NHS compliance frameworks",
                    "Integration with existing EPR systems",
                    "Staff training and change management",
                    "Ongoing support and optimisation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-200" />
                      <span className="text-blue-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Assessment",
                      description: "Comprehensive analysis of current workflows and identification of optimisation opportunities"
                    },
                    {
                      step: "02",
                      title: "Solution Design",
                      description: "Tailored AI architecture designed for your specific clinical and operational needs"
                    },
                    {
                      step: "03",
                      title: "Implementation",
                      description: "Phased deployment with continuous testing and validation against NHS standards"
                    },
                    {
                      step: "04",
                      title: "Optimisation & Support",
                      description: "Ongoing monitoring, refinement, and dedicated support to ensure sustained value"
                    }
                  ].map((phase, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold">
                        {phase.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{phase.title}</h4>
                        <p className="text-sm text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Transform Healthcare Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to implement AI solutions that enhance patient care and operational efficiency? 
            Contact us to discuss your ambient voice technology trial and AI adoption needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+44 (0) 20 1234 5678",
                link: "tel:+442012345678"
              },
              {
                icon: MapPin,
                title: "Location",
                content: "London, United Kingdom",
                link: null
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "Get in touch via our contact form",
                link: "#contact-form"
              }
            ].map((contact, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
                <contact.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="font-semibold text-gray-900 mb-2">{contact.title}</div>
                {contact.link ? (
                  <a href={contact.link} className="text-blue-600 hover:underline">
                    {contact.content}
                  </a>
                ) : (
                  <div className="text-gray-600">{contact.content}</div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-xl mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
            <form 
              action="https://formspree.io/f/mzzowvgz"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="john.smith@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organisation</label>
                <input 
                  type="text"
                  name="organisation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your organisation name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                <input 
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in the NHS AVT AI Trial?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're excited about the opportunity to support West Suffolk NHS Foundation Trust with 
              cutting-edge ambient voice technology. Let's discuss how we can deliver exceptional results together.
            </p>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
              Schedule a Consultation <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Are you passionate about AI, data analytics, and transforming industries through technology? 
              We're always looking for talented individuals who share our commitment to excellence and innovation.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "Cutting-edge AI and cloud projects",
                  "Work with leading NHS trusts and financial institutions",
                  "Continuous learning and certification opportunities",
                  "Flexible working arrangements",
                  "Collaborative and innovative culture",
                  "Career growth in emerging technologies"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Working With Us?</h3>
              <p className="text-blue-100 mb-6">
                We'd love to hear from you! Whether you're a data analyst, AI engineer, business consultant, 
                or cloud architect, send us your CV and tell us why you'd be a great fit for Sutatscode.
              </p>
              <a 
                href="mailto:dennis.ehiobu@sutatscode.co.uk"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Sutatscode Ltd</span>
              </div>
              <p className="text-gray-400 text-sm">
                Delivering IT Solutions Since 2019
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">AI Adoption</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Business Analytics</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Data Resilience</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Cloud Solutions</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition-colors">Healthcare AI</button></li>
                <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition-colors">Financial Services</button></li>
                <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition-colors">Regulatory Compliance</button></li>
                <li><button onClick={() => scrollToSection('expertise')} className="hover:text-white transition-colors">Strategic Consulting</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => scrollToSection('careers')} className="hover:text-white transition-colors">Careers</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Sutatscode Ltd. All rights reserved. | Registered in England & Wales</p>
          </div>
        </div>
      </footer>
    </div>
  );
}