"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowLeft, Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";

const SERVICE_DATA: Record<string, any> = {
    "in-home": {
        title: "In-Home And Community Support",
        subtitle: "Professional, compassionate support in the comfort of your home.",
        image: "/images/ndis/service-in-home.png",
        accent: "purple",
        content: `
      ReviraCare is dedicated to providing exceptional support to individuals with disabilities, ensuring they receive the care and assistance they need in the comfort of their homes. Our Home Care services are tailored to promote independence, dignity, and a high quality of life for all our clients.
      
      Home care refers to professional, compassionate support provided in a person’s home to help them with daily living activities, medical needs, or companionship. It is an ideal solution for those who want to maintain their independence while receiving the support they need. ReviraCare ensures that every home care plan is customized to meet the unique needs of individuals with disabilities.
    `,
        benefits: [
            {
                title: "Comfort and Familiarity",
                description: "Staying at home allows clients to remain in a space they know and cherish."
            },
            {
                title: "Personalized Care",
                description: "One-on-one support with care plans specifically designed for each individual."
            },
            {
                title: "Independence",
                description: "Leading fulfilling lives while managing disabilities effectively."
            },
            {
                title: "Family Involvement",
                description: "Encouraging families to be part of the caregiving process."
            }
        ],
        sections: [
            {
                title: "Nursing Care Support",
                content: "At ReviraCare, we offer high-quality nursing care services tailored specifically for individuals with disabilities. Our skilled nursing team is trained to meet unique medical and personal needs.",
                subtopics: [
                    { title: "Medication Management", description: "Timely and accurate administration." },
                    { title: "Wound Care", description: "Essential support to prevent infections and promote healing." },
                    { title: "Routine Monitoring", description: "Monitoring vital signs and managing chronic conditions." }
                ]
            },
            {
                title: "Daily Living Activities (ADLs)",
                content: "Assistance with various daily tasks ensuring safety and well-being.",
                subtopics: [
                    { title: "Assistance with Mobility", description: "Help with movement and transferring between positions." },
                    { title: "Personal Hygiene", description: "Tasks performed with dignity and respect." },
                    { title: "Meal Assistance", description: "Ensuring proper nutrition in a respectful manner." }
                ]
            }
        ]
    },
    "social": {
        title: "Social And Community Participation",
        subtitle: "Fostering inclusion, social interaction, and a sense of belonging.",
        image: "/images/ndis/service-social.png",
        accent: "purple",
        content: `
      Social and community participation is a critical aspect of a person’s well-being. At ReviraCare, we understand the importance of fostering inclusion, social interaction, and a sense of belonging within the community for people with disabilities. This service is designed to encourage active involvement in social activities.
    `,
        benefits: [
            {
                title: "Building Connections",
                description: "Building relationships to reduce isolation."
            },
            {
                title: "Improved Mental Health",
                description: "Combating loneliness and boosting self-esteem."
            },
            {
                title: "Skill Development",
                description: "Developing crucial social and communication skills."
            },
            {
                title: "Empowerment",
                description: "Feeling empowered through equal opportunities."
            }
        ],
        sections: [
            {
                title: "Our Community Services",
                content: "We provide a range of services to assist individuals in becoming active participants.",
                subtopics: [
                    { title: "Community Events", description: "Social meetups aligned with interests." },
                    { title: "Volunteering", description: "Connecting individuals with giving-back opportunities." },
                    { title: "Recreational Activities", description: "Sports teams, arts, and crafts." },
                    { title: "Social Networks", description: "Establishing meaningful supportive connections." }
                ]
            }
        ]
    },
    "group": {
        title: "Group Activities And Community Programs",
        subtitle: "Meaningful, enjoyable, and enriching group experiences.",
        image: "/images/ndis/service-group.png",
        accent: "purple",
        content: `
      We are committed to providing a wide range of group activities and community programs designed to promote independence, improve social skills, and enhance overall well-being. Our programs are carefully crafted to ensure meaningful engagement.
    `,
        benefits: [
            {
                title: "Enhanced Communication",
                description: "Learning how to express yourself effectively."
            },
            {
                title: "Building Friendships",
                description: "Combating isolation in safe settings."
            },
            {
                title: "Boosting Confidence",
                description: "Feeling a sense of achievement and self-worth."
            }
        ],
        sections: [
            {
                title: "Social Integration",
                content: "Recreational programs like art classes, team sports, and music therapy.",
                subtopics: [
                    { title: "Recreational Classes", description: "Art, music, and creative expression." },
                    { title: "Outdoor Excursions", description: "Exploring the community together." },
                    { title: "Teamwork", description: "Learning to collaborate and communicate." }
                ]
            },
            {
                title: "Empowerment Programs",
                content: "Practical skills for more independent lives.",
                subtopics: [
                    { title: "Life Skills Mastery", description: "Cooking, budgeting, and problem-solving." },
                    { title: "Career Preparation", description: "Job-readiness training." },
                    { title: "Increased Self-Esteem", description: "Showcasing talents and accomplishments." }
                ]
            }
        ]
    },
    "sil": {
        title: "Supported Independent Living (SIL)",
        subtitle: "Tailored support for living independently in the community.",
        image: "/images/ndis/service-sil.png",
        accent: "purple",
        content: `
      Supported Independent Living (SIL) is all about helping you live as independently as possible while receiving the help you need with daily tasks. Whether you live in a shared home or alone, our team provides 24/7 support.
    `,
        benefits: [
            { title: "Personalized Support", description: "Tailored to your specific needs and goals." },
            { title: "Independence", description: "Developing skills to manage your own home." },
            { title: "Safety", description: "Peace of mind with 24/7 on-call support." }
        ],
        sections: [
            {
                title: "What We Provide",
                content: "Comprehensive support for a safe and empowering home life.",
                subtopics: [
                    { title: "24/7 Care", description: "Always there when you need us." },
                    { title: "Skill Building", description: "Learning to manage household tasks." },
                    { title: "Community Access", description: "Helping you stay connected with your area." }
                ]
            }
        ]
    },
    "skills": {
        title: "Daily Living And Life Skills",
        subtitle: "Empowering you with the skills for everyday success.",
        image: "/images/ndis/service-life-skills.png",
        accent: "purple",
        content: `
      Developing daily living and life skills is essential for independence. We work with you to master the tasks that matter most, from cooking healthy meals to managing your budget and using public transport.
    `,
        benefits: [
            { title: "Autonomy", description: "Gaining the confidence to do things yourself." },
            { title: "Practicality", description: "Useful skills for real-world situations." },
            { title: "Growth", description: "Continuous learning and improvement." }
        ],
        sections: [
            {
                title: "Skill Development Areas",
                content: "Focused training in key areas of daily life.",
                subtopics: [
                    { title: "Household Management", description: "Cleaning, laundry, and organization." },
                    { title: "Financial Literacy", description: "Budgeting and managing money." },
                    { title: "Healthy Eating", description: "Meal planning and cooking skills." }
                ]
            }
        ]
    },
    "sda": {
        title: "Specialised Disability Accommodation (SDA)",
        subtitle: "Modern, accessible housing designed for your needs.",
        image: "/images/ndis/service-sda.png",
        accent: "purple",
        content: `
      Specialised Disability Accommodation (SDA) refers to housing for people who require very high support needs. Our SDA properties are designed to be accessible, functional, and beautiful, ensuring a high quality of life.
    `,
        benefits: [
            { title: "Accessibility", description: "Buildings designed for wheelchairs and mobility aids." },
            { title: "Technology", description: "Smart home features for increased independence." },
            { title: "Comfort", description: "Modern interiors that feel like home." }
        ],
        sections: [
            {
                title: "Our Properties",
                content: "State-of-the-art accommodation with supportive features.",
                subtopics: [
                    { title: "Wide Doorways", description: "Ensuring easy movement throughout." },
                    { title: "Specialized Equipment", description: "Ceiling hoists and automated systems." },
                    { title: "Safe Environment", description: "Designed for safety and peace of mind." }
                ]
            }
        ]
    },
    "coordination": {
        title: "Coordination Of Supports",
        subtitle: "Connecting you with services that align with your NDIS goals.",
        image: "/images/ndis/service-group.png",
        accent: "purple",
        content: `
      Assisting participants in managing their NDIS plans by connecting them with services that align with their goals. Our coordinators simplify the process to ensure effective use of resources.
    `,
        benefits: [
            { title: "Plan Management", description: "Support to navigate and use your NDIS plan effectively." },
            { title: "Service Linking", description: "Connecting you with the right providers for your goals." },
            { title: "Resource Optimisation", description: "Making the most of your allocated supports." }
        ],
        sections: [
            {
                title: "How We Help",
                content: "Our coordinators work with you to simplify the NDIS process and connect you with services that align with your goals.",
                subtopics: [
                    { title: "Goal Alignment", description: "Matching services to your plan and aspirations." },
                    { title: "Process Simplification", description: "Reducing complexity so you can focus on what matters." },
                    { title: "Ongoing Support", description: "Continuous assistance as your needs evolve." }
                ]
            }
        ]
    },
    "short-term-accommodation": {
        title: "Short/Medium Term Accommodation",
        subtitle: "Temporary housing for respite and transitional care.",
        image: "/images/ndis/service-sil.png",
        accent: "purple",
        content: `
      Offering temporary housing solutions for individuals needing respite or transitional care. Our accommodations are designed to provide comfort, support, and opportunities for skill development.
    `,
        benefits: [
            { title: "Respite", description: "A break for you and your carers in a supportive setting." },
            { title: "Transitional Care", description: "Stable accommodation during life transitions." },
            { title: "Skill Development", description: "Opportunities to build independence in a safe environment." }
        ],
        sections: [
            {
                title: "What We Offer",
                content: "Comfortable, supportive accommodation for short or medium stays.",
                subtopics: [
                    { title: "Comfort", description: "A welcoming environment that feels like home." },
                    { title: "Support", description: "Staff on hand to assist with daily needs." },
                    { title: "Skill Building", description: "Programs to develop independence and confidence." }
                ]
            }
        ]
    },
    "housing-tenancy": {
        title: "Housing And Tenancy",
        subtitle: "Finding, securing, and maintaining the right home for you.",
        image: "/images/ndis/service-sda.png",
        accent: "purple",
        content: `
      Providing assistance with finding, securing, and maintaining appropriate housing. Our team helps individuals understand their tenancy rights and responsibilities while ensuring a stable living environment.
    `,
        benefits: [
            { title: "Finding Housing", description: "Support to search for and secure suitable accommodation." },
            { title: "Tenancy Rights", description: "Understanding your rights and responsibilities." },
            { title: "Stable Living", description: "Ongoing support to maintain a stable living environment." }
        ],
        sections: [
            {
                title: "Our Support",
                content: "We help you navigate the housing journey from search to ongoing tenancy.",
                subtopics: [
                    { title: "Search Support", description: "Guidance in finding appropriate and accessible housing." },
                    { title: "Applications", description: "Help with applications and paperwork." },
                    { title: "Sustaining Tenancy", description: "Support to maintain a stable and secure home." }
                ]
            }
        ]
    },
    "nursing-care": {
        title: "Nursing Care",
        subtitle: "Professional nursing services tailored to your health needs.",
        image: "/images/ndis/service-in-home.png",
        accent: "purple",
        content: `
      Delivering professional nursing services to address medical and health needs, including wound care, medication management, and monitoring chronic conditions. We provide compassionate and skilled care tailored to individual requirements.
    `,
        benefits: [
            { title: "Wound Care", description: "Expert care to prevent infection and promote healing." },
            { title: "Medication Management", description: "Safe and timely administration and monitoring." },
            { title: "Chronic Condition Monitoring", description: "Ongoing support for long-term health needs." }
        ],
        sections: [
            {
                title: "Our Nursing Services",
                content: "Compassionate, skilled care delivered in the comfort of your home or accommodation.",
                subtopics: [
                    { title: "Wound Care", description: "Essential support to prevent infections and promote healing." },
                    { title: "Medication Management", description: "Timely and accurate administration." },
                    { title: "Routine Monitoring", description: "Monitoring vital signs and managing chronic conditions." }
                ]
            }
        ]
    },
    "assist-travel-transport": {
        title: "Assist Travel/Transport",
        subtitle: "Reliable, safe travel support tailored to your schedule.",
        image: "/images/ndis/service-social.png",
        accent: "purple",
        content: `
      True freedom starts with a worry-free journey. At ReviraCare, we offer reliable and safe travel support, carefully tailored to your unique schedule and needs. We're here to build your confidence, helping you reach medical appointments, enjoy social outings, and stay connected with your community.
    `,
        benefits: [
            { title: "Reliable & Safe", description: "Dependable transport so you can plan with confidence." },
            { title: "Tailored to You", description: "Scheduled around your appointments and activities." },
            { title: "Community Access", description: "Reach medical appointments, social outings, and more." }
        ],
        sections: [
            {
                title: "How We Support Your Travel",
                content: "We provide safe, accessible transport so you can get where you need to go.",
                subtopics: [
                    { title: "Medical Appointments", description: "On-time transport to healthcare visits." },
                    { title: "Social Outings", description: "Travel to community and social activities." },
                    { title: "Accessible Vehicles", description: "Vehicles equipped for your mobility needs." }
                ]
            }
        ]
    }
};

const ACCENTS: Record<string, string> = {
    emerald: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    blue: "text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/5",
    purple: "text-purple-600 dark:text-purple-400 border-purple-500/20 bg-purple-500/5",
    violet: "text-violet-600 dark:text-violet-400 border-violet-500/20 bg-violet-500/5",
    indigo: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    teal: "text-teal-600 dark:text-teal-400 border-teal-500/20 bg-teal-500/5",
    sky: "text-sky-600 dark:text-sky-400 border-sky-500/20 bg-sky-500/5",
    amber: "text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-500/5",
    rose: "text-rose-600 dark:text-rose-400 border-rose-500/20 bg-rose-500/5",
    cyan: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
};

const ACCENT_DOT: Record<string, string> = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    violet: "bg-violet-500",
    indigo: "bg-indigo-500",
    teal: "bg-teal-500",
    sky: "bg-sky-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    cyan: "bg-cyan-500",
};

export default function ServiceDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const service = SERVICE_DATA[id];

    if (!service) {
        return (
            <Section className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Service Not Found</h1>
                    <Link href="/" className="text-emerald-500 font-bold hover:underline">Back to Home</Link>
                </div>
            </Section>
        );
    }

    const accentClass = ACCENTS[service.accent] || ACCENTS.purple;

    return (
        <main className="bg-zinc-50 dark:bg-zinc-950 min-h-screen [--primary:var(--secondary)] [--accent:var(--purple-100)] [--accent-foreground:var(--purple-700)] dark:[--accent:#3b0764] dark:[--accent-foreground:#f3e8ff]">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover dark:opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent dark:from-black/80 dark:to-transparent" />

                <Container className="relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 font-bold text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 w-fit"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Services
                        </Link>
                        <h1 className="hero-title tracking-tight text-white leading-[1.1] opacity-60">
                            {service.title}
                        </h1>
                    </motion.div>
                </Container>
            </section>

            <NDISBrandingBar title={service.title} />

            {/* Main Content */}
            <Section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Content Area */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-zinc dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-12">
                                    {service.content}
                                </p>

                                {/* Sections */}
                                <div className="space-y-16">
                                    {service.sections.map((section: any, idx: number) => (
                                        <div key={idx} className="relative">
                                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                                                {section.title}
                                            </h2>
                                            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                                                {section.content}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {section.subtopics.map((sub: any, sIdx: number) => (
                                                    <div
                                                        key={sIdx}
                                                        className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm"
                                                    >
                                                        <h3 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-3">
                                                            <span className={cn("w-1.5 h-1.5 rounded-full", ACCENT_DOT[service.accent] ?? "bg-emerald-500")} />
                                                            {sub.title}
                                                        </h3>
                                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                            {sub.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Benefits Card */}
                            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-xl">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Key Benefits</h3>
                                <ul className="space-y-6">
                                    {service.benefits.map((benefit: any, idx: number) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className={cn("shrink-0 w-6 h-6 rounded-full flex items-center justify-center", accentClass)}>
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{benefit.title}</h4>
                                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{benefit.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Card */}
                            <div className="p-8 rounded-3xl bg-zinc-900 dark:bg-zinc-800 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-50" />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4">Need Support?</h3>
                                    <p className="text-zinc-400 text-sm mb-8">
                                        Contact us today to discuss how we can help you or your loved one live a more independent life.
                                    </p>
                                    <div className="space-y-4">
                                        <a href="tel:1800REVIRA" className="flex items-center gap-3 text-sm font-bold hover:text-emerald-400 transition-colors">
                                            <Phone className="w-4 h-4" /> 1800 REVIRA
                                        </a>
                                        <a href="mailto:info@reviracare.com.au" className="flex items-center gap-3 text-sm font-bold hover:text-emerald-400 transition-colors">
                                            <Mail className="w-4 h-4" /> info@reviracare.com.au
                                        </a>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="mt-8 block w-full py-4 bg-white text-zinc-950 rounded-2xl font-bold text-center text-sm hover:scale-[1.02] transition-transform active:scale-95"
                                    >
                                        Contact Us Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
