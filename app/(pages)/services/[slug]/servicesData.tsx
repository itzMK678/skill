const services = [
    {
      id: 1,
      slug: 'seo',
      title: 'Search Engine Optimization (SEO)',
      description: 
        'Elevate your website\'s ranking on search engines like Google to attract high-quality organic traffic using advanced, data-driven SEO strategies.',
      overview: 
        'Search Engine Optimization (SEO) is the cornerstone of digital visibility, designed to improve your website’s position on search engine results pages (SERPs). Our SEO services combine technical expertise, content excellence, and strategic link-building to drive sustainable growth. By aligning with the latest algorithm updates and user intent, we ensure your website not only ranks higher but also delivers a superior user experience.',
      process:
        'Our SEO process begins with a detailed website audit to identify technical issues, followed by in-depth keyword research and competitor analysis. We optimize on-page elements like meta tags, headers, and content, while addressing technical SEO aspects such as site speed, crawlability, and schema markup. Off-page efforts include high-quality link-building and local SEO strategies. Monthly performance reports, powered by tools like Google Analytics, SEMrush, and Ahrefs, ensure transparency and continuous improvement.',
      benefits: [
        'Increased organic traffic and brand visibility',
        'Higher ROI compared to paid advertising',
        'Long-term, sustainable results',
        'Improved user experience and site performance',
      ],
      toolsUsed: [
        'Google Analytics',
        'Google Search Console',
        'SEMrush',
        'Ahrefs',
        'Screaming Frog',
        'Moz',
      ],
      caseStudy: {
        title: 'Local Retail Chain SEO Success',
        summary: 'We helped a regional retail chain improve their local SEO, resulting in a 45% increase in organic traffic and a 30% boost in in-store visits within 6 months.',
      },
      additionalInfo: {
        pricing: '$1000 - $5000/month',
        duration: '3 - 6 months for initial results, ongoing for sustained growth',
        recommendedFor: 'Businesses seeking long-term organic growth, eCommerce platforms, local businesses aiming for local SEO dominance, and B2B companies targeting niche keywords.',
        features: [
          'Advanced keyword research and optimization',
          'Technical SEO audit and fixes (e.g., site speed, mobile usability)',
          'High-quality content creation and optimization',
          'Mobile SEO and voice search optimization',
          'Authority-building link acquisition campaigns',
          'Local SEO and Google My Business optimization',
        ],
      },
    },
    {
      id: 2,
      slug: 'ppc',
      title: 'Pay-Per-Click (PPC)',
      description: 
        'Drive immediate, high-intent traffic and maximize ROI with precision-targeted PPC campaigns across multiple platforms.',
      overview: 
        'Pay-Per-Click (PPC) advertising delivers instant visibility by placing your ads in front of the right audience at the right time. Our PPC services focus on strategic campaign planning, precise audience targeting, and continuous optimization to ensure cost-efficiency and high conversion rates. We manage campaigns across Google Ads, Microsoft Advertising, and social media platforms like Facebook and LinkedIn.',
      process:
        'We start with comprehensive keyword research and audience segmentation to create tailored campaigns. Our team designs compelling ad copy, optimizes landing pages for conversions, and implements A/B testing to refine performance. Real-time bid adjustments, audience retargeting, and conversion tracking ensure maximum return on ad spend (ROAS). Detailed reports provide insights into campaign performance and opportunities for improvement.',
      benefits: [
        'Immediate traffic and lead generation',
        'Highly targeted audience reach',
        'Measurable results with clear ROI',
        'Flexibility to adjust campaigns in real-time',
      ],
      toolsUsed: [
        'Google Ads',
        'Microsoft Advertising',
        'Facebook Ads Manager',
        'Google Keyword Planner',
        'Optimizely',
        'Hotjar',
      ],
      caseStudy: {
        title: 'eCommerce PPC Campaign',
        summary: 'For an online retailer, we optimized Google Ads campaigns, reducing cost-per-click by 25% and increasing conversions by 40% within 3 months.',
      },
      additionalInfo: {
        pricing: '$1500 - $6000/month (excluding ad spend)',
        duration: '1 - 3 months for initial campaigns, ongoing for scaling',
        recommendedFor: 'Businesses needing rapid lead generation, eCommerce brands launching new products, local businesses targeting specific demographics.',
        features: [
          'Custom campaign strategy and setup',
          'A/B testing for ads and landing pages',
          'Competitor keyword and ad analysis',
          'Cross-platform ad management (Google, Facebook, LinkedIn)',
          'Advanced conversion tracking and retargeting',
          'Dynamic remarketing campaigns',
        ],
      },
    },
    {
      id: 3,
      slug: 'smm',
      title: 'Social Media Marketing (SMM)',
      description: 
        'Amplify your brand’s voice and foster meaningful engagement with your audience on platforms like Instagram, LinkedIn, and TikTok.',
      overview: 
        'Social Media Marketing (SMM) is about building a vibrant online community around your brand. Our approach combines organic content strategies with targeted paid campaigns to boost engagement, drive traffic, and increase conversions. We create platform-specific content that resonates with your audience and aligns with your business goals.',
      process:
        'We begin by defining your target audience and crafting a content calendar tailored to each platform. Our team produces high-quality visuals, videos, and copy, while managing paid campaigns to maximize reach. We engage with followers, collaborate with influencers, and use analytics tools like Sprout Social and Hootsuite to monitor performance and refine strategies.',
      benefits: [
        'Enhanced brand loyalty and awareness',
        'Direct engagement with customers',
        'Increased website traffic from social channels',
        'Cost-effective advertising options',
      ],
      toolsUsed: [
        'Hootsuite',
        'Sprout Social',
        'Canva',
        'Adobe Creative Suite',
        'Meta Business Suite',
        'BuzzSumo',
      ],
      caseStudy: {
        title: 'Startup Social Media Growth',
        summary: 'A tech startup saw a 60% increase in Instagram followers and a 25% boost in website traffic after a 4-month SMM campaign.',
      },
      additionalInfo: {
        pricing: '$1000 - $3000/month',
        duration: '2 - 4 months for initial campaigns, ongoing for growth',
        recommendedFor: 'Brands aiming to build a loyal community, startups seeking rapid audience growth, businesses leveraging social commerce.',
        features: [
          'Platform-specific content strategies',
          'High-quality content creation (graphics, videos, reels)',
          'Paid social campaigns across Instagram, LinkedIn, TikTok',
          'Influencer partnerships and collaborations',
          'Community management and engagement',
          'Detailed performance analytics and reporting',
        ],
      },
    },
    {
      id: 4,
      slug: 'cro',
      title: 'Conversion Rate Optimization (CRO)',
      description:
        'Transform your website into a conversion machine by optimizing user journeys and increasing desired actions.',
      overview:
        'Conversion Rate Optimization (CRO) is the science of turning website visitors into customers. By analyzing user behavior and testing improvements, we enhance your website’s performance to maximize conversions. Our data-driven approach focuses on usability, design, and persuasive elements to drive measurable results.',
      process:
        'We start with user behavior analysis using heatmaps, session recordings, and surveys to identify friction points. Next, we conduct A/B and multivariate testing on key elements like CTAs, forms, and page layouts. We optimize site speed, mobile responsiveness, and checkout processes to ensure a seamless experience. Regular reports track improvements in conversion rates and revenue.',
      benefits: [
        'Higher conversion rates without increasing traffic',
        'Improved user experience and satisfaction',
        'Increased revenue from existing visitors',
        'Data-driven decision-making',
      ],
      toolsUsed: [
        'Hotjar',
        'Google Optimize',
        'Crazy Egg',
        'VWO',
        'Optimizely',
        'Qualaroo',
      ],
      caseStudy: {
        title: 'SaaS CRO Breakthrough',
        summary: 'For a SaaS company, we optimized their signup flow, increasing trial-to-paid conversions by 35% in 2 months.',
      },
      additionalInfo: {
        pricing: '$1200 - $4000/month',
        duration: '1 - 2 months for initial optimizations, ongoing for scaling',
        recommendedFor: 'eCommerce stores aiming to boost sales, SaaS platforms seeking higher conversions, businesses with high traffic but low conversion rates.',
        features: [
          'In-depth user behavior analysis with heatmaps',
          'A/B and multivariate testing',
          'Optimized CTAs and form designs',
          'Mobile and checkout process optimization',
          'Site speed and performance enhancements',
          'Personalized user journey improvements',
        ],
      },
    },
    {
      id: 5,
      slug: 'web-development',
      title: 'Web Development',
      description: 
        'Build fast, secure, and visually stunning websites that engage users and drive business success across all devices.',
      overview: 
        'Our Web Development services deliver custom websites tailored to your brand’s needs. We combine cutting-edge technologies, responsive design, and SEO best practices to create websites that are both beautiful and functional. From corporate sites to complex web applications, we ensure top-tier performance and scalability.',
      process: 
        'Our process starts with discovery and wireframing to define your goals and user experience. We then design intuitive UI/UX, develop front-end and back-end functionality, and integrate CMS or eCommerce platforms like WordPress or Magento. Rigorous testing ensures cross-browser compatibility, security, and performance before launch. Post-launch, we offer maintenance and updates.',
      benefits: [
        'Enhanced user engagement and retention',
        'Seamless performance across devices',
        'Scalable solutions for future growth',
        'Improved SEO and accessibility',
      ],
      toolsUsed: [
        'React',
        'Node.js',
        'WordPress',
        'Magento',
        'Figma',
        'Postman',
      ],
      caseStudy: {
        title: 'Corporate Website Redesign',
        summary: 'We redesigned a corporate website, improving load times by 50% and increasing user engagement by 30% within 3 months.',
      },
      additionalInfo: {
        pricing: '$2000 - $10000/project',
        duration: '2 - 6 months depending on complexity',
        recommendedFor: 'Businesses needing a new website or redesign, eCommerce brands, organizations requiring custom web applications.',
        features: [
          'Responsive and accessible web design',
          'SEO-optimized architecture',
          'Custom CMS or eCommerce platform integration',
          'Robust security and performance optimization',
          'Cross-browser testing and deployment',
          'Ongoing maintenance and support',
        ],
      },
    },
    {
      id: 6,
      slug: 'shopify-development',
      title: 'Shopify Development',
      description:
        'Launch a high-converting Shopify store with custom designs and integrations to scale your eCommerce business.',
      overview:
        'Our Shopify Development services empower businesses to create and optimize eCommerce stores that drive sales. We specialize in custom theme development, seamless integrations, and performance optimization to deliver a store that’s easy to manage and built for conversions. Whether you’re starting fresh or scaling an existing store, we’ve got you covered.',
      process:
        'We begin with a consultation to understand your business goals, followed by store setup and custom theme design. We integrate payment gateways, shipping solutions, and marketing tools like Klaviyo or Mailchimp. Product management, SEO optimization, and performance testing ensure your store is ready to scale. Post-launch, we provide training and support.',
      benefits: [
        'User-friendly store management',
        'Optimized for conversions and SEO',
        'Scalable for growing businesses',
        'Seamless third-party integrations',
      ],
      toolsUsed: [
        'Shopify',
        'Liquid',
        'Klaviyo',
        'Mailchimp',
        'ShipStation',
        'Google Merchant Center',
      ],
      caseStudy: {
        title: 'Shopify Store Launch',
        summary: 'We launched a Shopify store for a fashion brand, achieving a 20% conversion rate increase and 50% faster load times within 2 months.',
      },
      additionalInfo: {
        pricing: '$1500 - $5000/project',
        duration: '1 - 3 months depending on complexity',
        recommendedFor: 'New eCommerce businesses, existing Shopify stores needing customization, brands aiming to optimize performance.',
        features: [
          'Custom Shopify theme development',
          'Secure payment gateway integration',
          'Advanced inventory and product management',
          'Shipping and tax configuration',
          'Marketing automation and SEO optimization',
          'Post-launch training and support',
        ],
      },
    },
  ];
  
  export default services;