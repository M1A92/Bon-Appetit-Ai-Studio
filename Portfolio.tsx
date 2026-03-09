import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    ChefHat,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Target,
    Leaf,
    Users,
    Zap,
    Building2,
    GraduationCap,
    Gavel,
    Briefcase,
    Heart,
    PartyPopper,
    CalendarDays,
    UtensilsCrossed,
    Phone,
    Mail,
    Instagram,
    Globe,
    ExternalLink
} from 'lucide-react';

// --- Components ---

const SlideWrapper: React.FC<{ children: React.ReactNode; id: string; className?: string }> = ({ children, id, className = "" }) => (
    <section
        id={id}
        className={`min-h-screen w-full flex flex-col justify-center items-center relative snap-start overflow-hidden px-6 py-20 ${className}`}
    >
        {children}
    </section>
);

const PlaceholderImage: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => (
    <div className={`bg-brand-primary/10 border-2 border-dashed border-brand-primary/20 rounded-2xl flex flex-col items-center justify-center p-8 text-center ${className}`}>
        <div className="bg-white/50 p-4 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-brand-primary/40" />
        </div>
        <p className="text-brand-primary/60 font-medium text-sm uppercase tracking-widest">{text}</p>
    </div>
);

const SlideContent: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0.2 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="max-w-6xl w-full"
    >
        {children}
    </motion.div>
);

// --- Content Sections ---

const CoverSlide = () => (
    <SlideWrapper id="slide-1" className="relative text-brand-secondary flex items-start justify-center pt-24 md:pt-32 lg:pt-36">
        {/* User Provided Background Image */}
        <div className="absolute inset-0 z-0">
            <img
                src="/Assets/Bon Appetit Website-37.jpg"
                alt="Luxury Catering Setup"
                className="w-full h-full object-cover object-bottom"
            />
            {/* Subtle overlay for the lower portion to ground the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        <SlideContent>
            <div className="relative z-10 px-4 flex flex-col items-center">
                {/* Glassmorphism Console */}
                <motion.div
                    initial={{ opacity: 0, y: 30, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, y: 0, backdropFilter: "blur(12px)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white/10 border border-white/20 p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center text-center max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-8"
                    >
                        <span className="text-brand-cta font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase px-4 py-1 border border-brand-cta/30 rounded-full">
                            Portfolio Presentation
                        </span>
                    </motion.div>

                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-brand-secondary">
                        Introducing the <br />
                        <span className="italic font-light text-brand-primary">Next Generation</span> <br />
                        <span className="font-light opacity-80">of Catering</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.2 }}
                        className="text-sm md:text-base font-light tracking-wide max-w-lg mb-8"
                    >
                        Luxury events, institutional excellence, and private memories — seamlessly coordinated with AI precision.
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="h-px w-24 bg-gradient-to-r from-transparent via-brand-cta to-transparent"
                    ></motion.div>
                </motion.div>
            </div>
        </SlideContent>

        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10"
        >
            <ChevronDown className="w-8 h-8" />
        </motion.div>
    </SlideWrapper>
);

const WhoWeAreSlide = () => (
    <SlideWrapper id="slide-2" className="bg-white">
        <SlideContent>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-brand-cta font-bold uppercase tracking-widest text-xs mb-4 block">Who We Are</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-brand-secondary mb-8 leading-tight">
                        Modern, Young, <br />and <span className="italic text-brand-primary">Caring.</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-8">
                        We’re a next-generation catering company bringing elegance and ease to every occasion.
                        As the first to introduce AI-powered planning designed around our clients, we make every experience effortless, personal, & unforgettable.
                    </p>
                    <div className="flex gap-4">
                        <div className="h-px w-12 bg-brand-cta self-center"></div>
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-secondary">Dubai's Luxury Standard</span>
                    </div>
                </div>
                <PlaceholderImage text="Image: Modern Team / Hospitality Spirit" className="aspect-square" />
            </div>
        </SlideContent>
    </SlideWrapper>
);

const DifferenceSlide = () => {
    const pillars = [
        {
            icon: Zap,
            title: "Effortless Planning",
            desc: "From instant quotes to tailored menus, our AI streamlines every step so planning is simple and stress-free."
        },
        {
            icon: Leaf,
            title: "Pure Ingredients",
            desc: "We source fresh, high-quality ingredients and craft dishes that look beautiful and taste unforgettable."
        },
        {
            icon: Sparkles,
            title: "Modern. Young. Different.",
            desc: "Fresh, bold, and trend-led - we redefine catering with a contemporary approach that stands out."
        },
        {
            icon: Target,
            title: "Made to Match Your Vision",
            desc: "From themed packages to fully custom concepts, we design experiences as unique as your occasion."
        }
    ];

    return (
        <SlideWrapper id="slide-3" className="bg-brand-background">
            <SlideContent>
                <div className="text-center mb-16">
                    <h2 className="font-serif text-5xl mb-4 text-brand-secondary">The Bon Appétit Difference</h2>
                    <p className="text-gray-500 font-light">Excellence in every detail, powered by intelligence.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-primary/5 border border-gray-50"
                        >
                            <div className="w-12 h-12 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-brand-primary" />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-brand-secondary mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </SlideContent>
        </SlideWrapper>
    );
};

const AutoSliderSlide = () => {
    const images = [
        "/Assets/Website Bilder/Bon Appetit Website-7.jpg",
        "/Assets/Website Bilder/Bon Appetit Website-21.jpg",
        "/Assets/Website Bilder/Bon Appetit Website-42.jpg",
        "/Assets/Website Bilder/Bon Appetit Website-43.jpg",
        "/Assets/Website Bilder/Bon Appetit Website-45.jpg",
        "/Assets/Website Bilder/Bon Appetit Website-50.jpg"
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const handleManualNav = (index: number) => {
        setCurrentImage(index);
        setIsAutoPlaying(false);
        // Resume autoplay after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <SlideWrapper id="slide-4" className="p-0 group">
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => handleManualNav((currentImage - 1 + images.length) % images.length)}
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => handleManualNav((currentImage + 1) % images.length)}
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="absolute inset-x-0 bottom-20 flex justify-center gap-4 z-20">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleManualNav(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentImage === i ? "w-12 bg-white" : "w-4 bg-white/40 hover:bg-white/70"}`}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 bg-black/10"></div>
            </div>
        </SlideWrapper>
    );
};

const BonnieSlide = () => (
    <SlideWrapper id="slide-5" className="bg-white">
        <SlideContent>
            <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-6">
                        <Sparkles className="w-4 h-4 text-brand-cta" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">AI-Powered Meet Bonnie</span>
                    </div>
                    <h2 className="font-serif text-5xl text-brand-secondary mb-6 italic">Bonnie</h2>
                    <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
                        Bonnie is your instant catering expert - ready to answer everything from menu choices to pricing and logistics in seconds.
                        Experience effortless event planning with our intelligent AI assistant.
                    </p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border border-brand-cta flex items-center justify-center text-brand-cta font-bold text-sm shrink-0">01</div>
                            <div>
                                <h4 className="font-bold text-brand-secondary text-sm uppercase tracking-wider mb-1">Plan with Bonnie</h4>
                                <p className="text-xs text-gray-400">Describe your event in natural language.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border border-brand-cta flex items-center justify-center text-brand-cta font-bold text-sm shrink-0">02</div>
                            <div>
                                <h4 className="font-bold text-brand-secondary text-sm uppercase tracking-wider mb-1">Customize & Confirm</h4>
                                <p className="text-xs text-gray-400">Fine-tune your menu and confirm your order seamlessly.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border border-brand-cta flex items-center justify-center text-brand-cta font-bold text-sm shrink-0">03</div>
                            <div>
                                <h4 className="font-bold text-brand-secondary text-sm uppercase tracking-wider mb-1">Our Team Steps In</h4>
                                <p className="text-xs text-gray-400">We personally review every detail with you.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <PlaceholderImage text="Image: AI Interface / Bonnie Mascot" className="aspect-video" />
                </div>
            </div>
        </SlideContent>
    </SlideWrapper>
);

const CorporateEventsSlide = () => {
    const items = [
        { icon: Building2, title: "Corporate Events", desc: "Conferences, seminars, workshops, and galas." },
        { icon: GraduationCap, title: "Schools & Universities", desc: "Reliable catering for campus events and large groups." },
        { icon: Gavel, title: "Government Entities", desc: "Professional and elegant catering for meetings and delegations." },
        { icon: Briefcase, title: "Corporate Catering", desc: "Daily meals, staff dining, and business catering." }
    ];

    return (
        <SlideWrapper id="slide-6" className="bg-brand-secondary text-white">
            <SlideContent>
                <div className="mb-16">
                    <span className="text-brand-cta font-bold uppercase tracking-widest text-xs mb-4 block">Our Events</span>
                    <h2 className="font-serif text-5xl italic">Corporate & Institutional</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <PlaceholderImage text={`Image: ${item.title}`} className="aspect-square mb-6 group-hover:bg-white/10 transition-colors" />
                            <div className="flex items-center gap-3 mb-3">
                                <item.icon className="w-5 h-5 text-brand-cta" />
                                <h3 className="font-serif text-xl">{item.title}</h3>
                            </div>
                            <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SlideContent>
        </SlideWrapper>
    );
};

const PrivateEventsSlide = () => {
    const items = [
        { icon: Heart, title: "Weddings", desc: "Elegant, timeless catering for your special day." },
        { icon: PartyPopper, title: "Celebrations", desc: "Birthdays, anniversaries, and gatherings of every size." },
        { icon: CalendarDays, title: "Seasonal", desc: "Christmas, Ramadan, National Day, & other special moments celebrate in style." }
    ];

    return (
        <SlideWrapper id="slide-7" className="bg-white">
            <SlideContent>
                <div className="mb-16 text-right">
                    <span className="text-brand-cta font-bold uppercase tracking-widest text-xs mb-4 block">Our Events</span>
                    <h2 className="font-serif text-5xl italic text-brand-secondary">Private & Social</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                            <PlaceholderImage text={`Image: ${item.title}`} className="aspect-[4/5] mb-8" />
                            <div className="flex items-center gap-3 mb-4">
                                <item.icon className="w-5 h-5 text-brand-primary" />
                                <h3 className="font-serif text-2xl text-brand-secondary">{item.title}</h3>
                            </div>
                            <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SlideContent>
        </SlideWrapper>
    );
};

const PartnershipsSlide = () => (
    <SlideWrapper id="slide-8" className="bg-brand-background">
        <SlideContent>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <span className="text-brand-cta font-bold uppercase tracking-[0.2em] text-xs mb-6">Partnerships</span>
                <h2 className="font-serif text-5xl md:text-6xl text-brand-secondary mb-8 leading-[1.1]">Trusted by Leading <br /><span className="italic text-brand-primary">Organizations</span></h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-16">
                    We’re proud to partner with top-tier corporations, government agencies, and discerning private clients
                    who trust us to deliver excellence at every event. Our growing portfolio speaks to quality and consistency.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full opacity-40 grayscale">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-16 bg-gray-200 rounded-lg flex items-center justify-center p-4">
                            <span className="text-[10px] font-bold text-gray-500">LOGO {i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </SlideContent>
    </SlideWrapper>
);

const CulinarySlide = () => {
    const categories = [
        "Canapés", "Live Cooking Stations", "Middle Eastern", "Desserts & Pastries", "Continental", "Western Fusion & Trendy Bites"
    ];

    return (
        <SlideWrapper id="slide-9" className="bg-white">
            <SlideContent>
                <div className="grid lg:grid-cols-3 gap-16 items-center">
                    <div className="lg:col-span-1">
                        <span className="text-brand-cta font-bold uppercase tracking-widest text-xs mb-4 block">Offerings</span>
                        <h2 className="font-serif text-5xl text-brand-secondary mb-8 underline decoration-brand-cta/30 underline-offset-8">Our Culinary <br />Selection</h2>
                        <p className="text-gray-500 font-light leading-relaxed mb-8">
                            We source fresh, high-quality ingredients and craft dishes that look beautiful and taste unforgettable.
                            Our menu covers every aspect of flavor profile.
                        </p>
                        <button className="bg-brand-primary text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform active:scale-95">
                            Request Menu
                        </button>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square">
                                <PlaceholderImage text={cat} className="h-full w-full group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-brand-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                    <span className="text-white font-serif text-lg text-center">{cat}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SlideContent>
        </SlideWrapper>
    );
};

const PortfolioFooter = () => (
    <section id="slide-11" className="snap-start min-h-[400px] w-full bg-gradient-to-br from-brand-primary to-brand-secondary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <img src="/Assets/white logo.png" alt="Bon Appétit AI Studio" className="h-16 w-auto object-contain brightness-110 mb-8" />
                    <p className="text-white/80 font-light max-w-sm leading-relaxed">
                        Redefining luxury hospitality through advanced artificial intelligence and culinary excellence.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] text-brand-cta mb-8">Direct Lines</h4>
                    <p className="text-sm font-bold text-white mb-2">+971 6 7044091</p>
                    <p className="text-sm font-bold text-white">+971 50 5634392</p>
                </div>
                <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] text-brand-cta mb-8">Studio</h4>
                    <p className="text-sm text-white/80 font-light mb-2">Dubai Design District, UAE</p>
                    <p className="text-sm text-white/80 font-light">concierge@bonappetit.ai</p>
                </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">© 2024 Bon Appétit AI Studio. All rights reserved.</p>
            </div>
        </div>
    </section>
);

const ThankYouSlide = () => (
    <SlideWrapper id="slide-10" className="bg-white text-brand-secondary relative">
        <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00ADB9_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <SlideContent>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="text-left">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-cta font-bold uppercase tracking-[0.3em] text-xs mb-8 block"
                    >
                        Contact
                    </motion.span>
                    <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-12 leading-[0.85] italic tracking-tighter">
                        Let's <br />
                        <span className="text-brand-primary">Create</span> <br />
                        Together.
                    </h2>
                    <p className="text-xl text-gray-500 font-light max-w-md leading-relaxed">
                        Transforming your vision into an unforgettable culinary journey.
                        Luxury catering, reimagined with intelligence.
                    </p>
                </div>

                <div className="bg-brand-background p-12 rounded-[3rem] shadow-2xl border border-white/50 backdrop-blur-sm">
                    <div className="space-y-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                                <Phone className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Direct Lines</p>
                                <p className="text-lg font-bold text-brand-secondary tracking-tight">+971 6 7044091</p>
                                <p className="text-lg font-bold text-brand-secondary tracking-tight">+971 50 5634392</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-brand-cta/10 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-brand-cta" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Inquiries</p>
                                <p className="text-lg font-bold text-brand-secondary tracking-tight">info@bonappetit-catering.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                                <Globe className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Digital Presence</p>
                                <p className="text-lg font-bold text-brand-secondary tracking-tight">www.bonappetit-catering.com</p>
                                <p className="text-sm font-medium text-brand-cta mt-1 hover:underline cursor-pointer">@bon.appetitco</p>
                            </div>
                        </div>

                        <button className="w-full bg-brand-secondary text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-brand-primary transition-colors duration-500 uppercase tracking-widest text-xs">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>
        </SlideContent>
    </SlideWrapper>
);

// --- Main Portfolio Component ---

const Portfolio: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const index = parseInt(id.split('-')[1]) - 1;
                    setActiveSlide(index);
                }
            });
        }, observerOptions);

        const slides = document.querySelectorAll('section[id^="slide-"]');
        slides.forEach((slide) => observer.observe(slide));

        // Disable global scrollbar on mount
        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalBodyOverflow = document.body.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        return () => {
            observer.disconnect();
            // Restore global scrollbar on unmount
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.body.style.overflow = originalBodyOverflow;
        };
    }, []);

    return (
        <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-hide bg-brand-background">
            {/* Navigation Indicators */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
                {[...Array(11)].map((_, i) => (
                    <a
                        key={i}
                        href={`#slide-${i + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border border-brand-primary/20 ${activeSlide === i ? 'bg-brand-primary h-8' : 'bg-brand-secondary/10 hover:bg-brand-primary/40'}`}
                    ></a>
                ))}
            </div>

            {/* Slide Counter */}
            <div className="fixed bottom-6 right-6 z-50 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-[10px] font-bold text-brand-secondary tracking-widest uppercase">
                Slide {activeSlide + 1} / 11
            </div>

            <CoverSlide />
            <WhoWeAreSlide />
            <DifferenceSlide />
            <AutoSliderSlide />
            <BonnieSlide />
            <CorporateEventsSlide />
            <PrivateEventsSlide />
            <PartnershipsSlide />
            <CulinarySlide />
            <ThankYouSlide />
            <PortfolioFooter />

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

export default Portfolio;
