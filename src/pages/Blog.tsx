import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  ArrowRight,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  TrendingUp,
  Award,
  Globe,
  Users,
  Target,
  ChevronRight,
  Bookmark,
  Filter,
} from "lucide-react";
import RegistrationForm from '../components/RegistrationForm';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState("newest");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const categories = [
    { id: "all", name: "All Posts", icon: Globe },
    { id: "leadership", name: "Leadership", icon: Award },
    { id: "member-stories", name: "Member Stories", icon: Users },
    { id: "community-impact", name: "Community Impact", icon: Target },
    { id: "global-insights", name: "Global Insights", icon: Globe },
    { id: "entrepreneurship", name: "Entrepreneurship", icon: TrendingUp },
    { id: "youth-development", name: "Youth Development", icon: Users },
  ];

  const featuredSlides = [
    {
      image: "/api/placeholder/1200/500",
      title: "Stories That Inspire",
      subtitle:
        "Discover the voices shaping Africa's future through JCI Nigeria",
    },
    {
      image: "/api/placeholder/1200/500",
      title: "Leadership Insights",
      subtitle:
        "Expert perspectives on developing the next generation of leaders",
    },
    {
      image: "/api/placeholder/1200/500",
      title: "Global Perspectives",
      subtitle:
        "Connecting African youth with worldwide opportunities and trends",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        "The ELV8 Revolution: How JCI Nigeria is Redefining Leadership Development in Africa",
      slug: "elv8-revolution-redefining-leadership-africa",
      excerpt:
        "An in-depth look at the transformative ELV8 theme and its impact on young African leaders. This comprehensive analysis explores how JCI Nigeria's innovative approach is creating a new generation of global changemakers.",
      content: `The landscape of leadership development in Africa is undergoing a profound transformation, and at the center of this revolution is JCI Nigeria's groundbreaking ELV8 initiative. As we navigate the complexities of the 21st century, the need for innovative, globally-minded leaders has never been more critical.

**The Genesis of ELV8**

The ELV8 theme emerged from extensive research and consultation with young leaders across Nigeria and the African continent. Our team identified four key areas where traditional leadership development programs were falling short:

1. **Individual Development**: The need for personalized leadership journeys that recognize each individual's unique strengths and challenges.

2. **Business Excellence**: Bridging the gap between leadership theory and practical business application in the African context.

3. **International Networks**: Creating meaningful connections that transcend borders and cultures.

4. **Community Impact**: Ensuring that leadership development translates into tangible community transformation.

**Revolutionary Approach to Leadership Training**

Unlike conventional leadership programs that follow a one-size-fits-all model, ELV8 employs a multi-dimensional approach that adapts to the learner's context, aspirations, and cultural background. Our methodology combines:

- **AI-Powered Learning Paths**: Utilizing artificial intelligence to create personalized learning experiences that evolve with the participant's growth.

- **Cross-Cultural Mentorship**: Pairing young African leaders with mentors from diverse global backgrounds, creating rich learning experiences that broaden perspectives.

- **Real-World Application**: Every leadership lesson is immediately applied to actual community projects, ensuring practical relevance and measurable impact.

- **Global Simulation Exercises**: Virtual reality-powered scenarios that place participants in complex global leadership situations.

**Measuring Success: The ELV8 Impact Dashboard**

One of the most innovative aspects of the ELV8 program is our comprehensive impact measurement system. Unlike traditional programs that rely solely on participant feedback, we track:

- **Leadership Competency Growth**: Using scientifically validated assessment tools administered quarterly
- **Community Project Outcomes**: Measuring the real-world impact of participant-led initiatives
- **Network Expansion**: Tracking the growth and diversity of each participant's professional network
- **Global Mobility**: Monitoring international opportunities accessed by program graduates

The results have been extraordinary. In just eight months since the program's launch, we've documented:

- 340% average increase in leadership competency scores
- Over 150 community projects launched by participants
- 45% of participants securing international opportunities within six months
- 89% of participants reporting significant expansion of their professional networks

**Case Study: Amara's Journey**

Consider the story of Amara Okafor, a 28-year-old software engineer from Lagos who joined the ELV8 program in March 2024. Initially focused solely on technical skills, Amara's personalized learning path identified her natural ability to bridge cultural divides and communicate complex ideas simply.

Within six months, Amara had:
- Launched a tech literacy program in three rural communities
- Secured mentorship from Silicon Valley executives
- Been selected for a leadership fellowship in Germany
- Started a tech startup that has since received international funding

"ELV8 didn't just develop my leadership skills," Amara reflects. "It helped me discover a leadership style that's authentically mine while connecting me with opportunities I never imagined possible."

**The Ripple Effect: Beyond Individual Transformation**

The true power of ELV8 lies not just in individual transformation but in its ripple effects across communities and organizations. Participants consistently report that their newfound leadership capabilities are transforming their workplaces, communities, and families.

Dr. Kwame Asante, a leadership researcher at the University of Ghana, notes: "What JCI Nigeria has achieved with ELV8 represents a paradigm shift in how we approach leadership development in Africa. They've created a model that's both globally relevant and deeply rooted in African values and contexts."

**Looking Ahead: The Future of Leadership Development**

As we look to the future, the ELV8 model is being studied and adapted by JCI chapters across Africa and beyond. The program's success has attracted attention from international development organizations, universities, and governments seeking to replicate its impact.

Our vision extends beyond Nigeria's borders. By 2026, we aim to have ELV8 programs running in all 54 African countries, creating a continent-wide network of elevated leaders who are equipped to tackle Africa's most pressing challenges while competing on the global stage.

**The Call to Action**

The ELV8 revolution is just beginning. As we continue to refine and expand this groundbreaking approach to leadership development, we invite other organizations, governments, and individuals to join us in reimagining what's possible for Africa's young leaders.

The future of African leadership is not just about producing more leaders—it's about elevating the quality, impact, and global relevance of every leader we develop. Through ELV8, we're not just changing individual lives; we're reshaping the leadership landscape of an entire continent.

*Ready to be part of the ELV8 revolution? Contact us today to learn how you can contribute to this transformative movement.*`,
      category: "leadership",
      author: {
        name: "Dr. Adebayo Ogundimu",
        role: "Director of Leadership Development",
        organization: "JCI Nigeria",
        image: "/api/placeholder/100/100",
        bio: "Dr. Ogundimu is a renowned leadership expert with over 15 years of experience in youth development across Africa.",
      },
      date: "2025-01-10",
      readTime: "12 min read",
      tags: [
        "ELV8",
        "Leadership Development",
        "Africa",
        "Innovation",
        "Youth Empowerment",
      ],
      views: 4521,
      likes: 287,
      comments: 45,
      shares: 89,
      image: "/api/placeholder/800/500",
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title:
        "From Lagos to Silicon Valley: A JCI Member's Entrepreneurial Journey",
      slug: "lagos-silicon-valley-jci-entrepreneurial-journey",
      excerpt:
        "Chioma Okechukwu shares her inspiring story of building a fintech startup that bridges African markets with global opportunities, all while maintaining her roots in community development.",
      content: `The journey from a bustling Lagos neighborhood to the heart of Silicon Valley is rarely linear, and Chioma Okechukwu's story exemplifies the power of preparation meeting opportunity. As a JCI Nigeria member since 2019, Chioma has transformed from a curious finance graduate into a successful entrepreneur whose fintech startup is revolutionizing financial inclusion across West Africa.

**The Beginning: Finding Purpose in Problems**

Chioma's entrepreneurial journey began not with a grand vision, but with a simple frustration. Growing up in Surulere, Lagos, she witnessed firsthand how limited access to financial services held back her community's economic potential.

"I remember my mother having to travel hours just to send money to her sister in a village," Chioma recalls. "There had to be a better way."

This observation, coupled with her finance background and the leadership skills she developed through JCI Nigeria's programs, laid the foundation for what would become PayBridge, a fintech platform that has processed over $50 million in transactions across 12 African countries.

**The JCI Nigeria Catalyst**

Joining JCI Nigeria in 2019 proved to be a pivotal decision. Through the organization's leadership development programs, Chioma gained access to mentorship, international networks, and most importantly, the confidence to think beyond traditional career paths.

"JCI Nigeria taught me that leadership isn't about having all the answers," she explains. "It's about asking the right questions and building the right teams to find solutions."

The organization's emphasis on community impact also shaped Chioma's approach to entrepreneurship. Rather than building a company solely for profit, she was determined to create a business that would elevate entire communities.

**Building PayBridge: From Idea to Impact**

The path from concept to creation was far from smooth. Chioma spent two years developing the initial prototype while working full-time at a Lagos-based bank. The technical challenges were daunting, but the regulatory hurdles proved even more complex.

"We had to navigate financial regulations in multiple countries while building technology that could work reliably even in areas with poor internet connectivity," she notes.

JCI Nigeria's international network proved invaluable during this phase. Through connections made at JCI conferences, Chioma was able to access expertise from fintech leaders in other markets, learning from both their successes and failures.

**The Silicon Valley Connection**

In 2023, PayBridge caught the attention of Vertex Ventures, a Silicon Valley-based venture capital firm focused on emerging markets. The $2.5 million Series A funding round that followed wasn't just about capital—it was validation of the global potential of solutions built for African challenges.

"The Silicon Valley ecosystem is incredible," Chioma observes, "but what I've learned is that the best global solutions often come from understanding local problems deeply."

Today, Chioma splits her time between Lagos and San Francisco, but her commitment to her Nigerian roots remains unwavering. PayBridge's headquarters remain in Lagos, and the company has created over 200 jobs in Nigeria.

**Scaling Impact: Beyond Financial Transactions**

PayBridge has evolved far beyond simple money transfers. The platform now offers:

- **Micro-lending services** for small businesses
- **Digital savings programs** for unbanked populations  
- **Agricultural financing** for smallholder farmers
- **Educational payment solutions** for schools and universities

Each feature was developed in response to real community needs identified through PayBridge's extensive user research program.

"We don't just move money," Chioma explains. "We move people closer to their dreams."

**The Ripple Effect: Inspiring the Next Generation**

Success has not distanced Chioma from her JCI Nigeria roots. She remains an active member and mentor, regularly speaking at the organization's programs and events.

"JCI Nigeria gave me my start," she says. "Now it's my turn to help others find theirs."

Through PayBridge's internship program, she has mentored over 50 young Nigerians, many of whom have gone on to launch their own startups or secure international opportunities.

**Lessons for Aspiring Entrepreneurs**

When asked about her advice for other young African entrepreneurs, Chioma emphasizes several key principles:

1. **Start with empathy**: "The best businesses solve real problems for real people."

2. **Embrace your context**: "Your local knowledge is your competitive advantage."

3. **Build networks before you need them**: "Relationships are the foundation of everything in business."

4. **Stay connected to your community**: "Success means nothing if you can't lift others as you climb."

**Looking Ahead: The Next Chapter**

As PayBridge prepares for its Series B funding round, Chioma's ambitions are expanding. The company is developing new products for the diaspora market and exploring expansion into East and Central Africa.

But perhaps more importantly, she's working on something she calls the "PayBridge Academy"—a program that will train the next generation of African fintech entrepreneurs.

"My dream is not just to build one successful company," she shares. "It's to prove that Africa can be a launching pad for global innovation, not just a market for solutions built elsewhere."

**The Continuing Journey**

Chioma's story is still being written, but her impact is already clear. PayBridge has not only improved financial access for hundreds of thousands of users but has also demonstrated the global potential of African innovation.

Her journey from Lagos to Silicon Valley and back again represents more than individual success—it's a blueprint for how young Africans can leverage global opportunities while remaining rooted in local impact.

As she often tells young entrepreneurs she mentors: "The world is big enough for your dreams, but never forget where those dreams were born."

*Chioma Okechukwu will be speaking at the JCI Nigeria International Leadership Summit 2025. Registration is now open at www.jcinigeria.org/summit2025.*`,
      category: "member-stories",
      author: {
        name: "Chioma Okechukwu",
        role: "CEO & Founder",
        organization: "PayBridge Technologies",
        image: "/api/placeholder/100/100",
        bio: "Chioma is a fintech entrepreneur and JCI Nigeria alumna, currently building financial inclusion solutions across Africa.",
      },
      date: "2025-01-08",
      readTime: "10 min read",
      tags: [
        "Entrepreneurship",
        "Fintech",
        "Silicon Valley",
        "Member Success",
        "Innovation",
      ],
      views: 3892,
      likes: 245,
      comments: 67,
      shares: 123,
      image: "/api/placeholder/800/500",
      featured: true,
      trending: false,
    },
    {
      id: 3,
      title:
        "Building Bridges: How Cross-Cultural Exchange Programs Shape Global Leaders",
      slug: "cross-cultural-exchange-programs-global-leaders",
      excerpt:
        "An exploration of JCI's international exchange initiatives and their profound impact on participants' worldview, leadership capabilities, and ability to drive meaningful change across cultures.",
      content: `In an increasingly interconnected world, the ability to navigate cultural differences and build meaningful relationships across borders has become essential for effective leadership. JCI Nigeria's cross-cultural exchange programs have emerged as a powerful catalyst for developing globally-minded leaders who can thrive in diverse environments while maintaining their authentic cultural identity.

**The Global Leadership Imperative**

Today's challenges—from climate change to economic inequality—transcend national boundaries and require collaborative solutions. Yet traditional leadership development programs often operate within cultural silos, limiting participants' exposure to diverse perspectives and approaches.

JCI Nigeria recognized this gap and has invested heavily in creating exchange opportunities that expose young African leaders to global best practices while sharing African innovation and wisdom with the world.

**Program Structure: Beyond Tourism to Transformation**

Unlike conventional exchange programs that focus primarily on cultural exposure, JCI Nigeria's cross-cultural initiatives are structured around collaborative problem-solving and mutual learning.

Each exchange follows a carefully designed framework:

**Pre-Exchange Preparation** (3 months):
- Cultural competency training
- Language basics (where applicable)
- Project development workshops
- Expectation setting and goal alignment

**Exchange Phase** (2-4 weeks):
- Immersive leadership experiences
- Joint community service projects
- Business case study collaborations
- Cultural immersion activities

**Post-Exchange Integration** (6 months):
- Implementation of learned practices
- Ongoing virtual collaboration
- Impact measurement and reporting
- Mentorship of future exchange participants

**Case Study: The Nigeria-Japan Leadership Bridge**

One of our most successful exchange programs has been the Nigeria-Japan Leadership Bridge, launched in partnership with JCI Japan in 2023. This program has created profound transformation stories on both sides.

Adebola Adeyemi, a 29-year-old social entrepreneur from Kano, spent three weeks in Tokyo working with Japanese peers on urban sustainability projects. The experience fundamentally shifted her approach to problem-solving.

"In Nigeria, we often think big and move fast," she reflects. "In Japan, I learned the power of meticulous planning and attention to detail. Now I combine both approaches in my work."

Adebola returned to Nigeria with new methodologies for waste management that she adapted to local contexts. Her organization, GreenPath Nigeria, has since implemented Japanese-inspired recycling programs in five Nigerian cities, creating over 300 jobs while significantly reducing urban waste.

Conversely, Hiroshi Tanaka, her Japanese counterpart, was inspired by the resourcefulness and community-centered approach he observed in Nigeria. He has since launched a social enterprise in Tokyo that applies Nigerian-inspired community mobilization techniques to address elderly isolation—a major issue in Japanese society.

**The Reciprocal Learning Model**

What sets JCI Nigeria's exchange programs apart is their emphasis on reciprocal learning. Rather than positioning exchanges as one-way knowledge transfer, these programs recognize that every culture has valuable insights to offer.

Dr. Sarah Kim, a leadership researcher at Seoul National University who has studied JCI's exchange programs, notes: "The mutual learning approach creates deeper, more sustainable relationships. Participants don't just acquire new skills—they develop the capacity to continuously learn from cultural differences."

**Beyond Individual Transformation: Systemic Impact**

The ripple effects of these exchanges extend far beyond individual participants. Alumni consistently report that their experiences have transformed their organizations and communities.

Consider the impact of the Nigeria-Germany Entrepreneurship Exchange:

- **Innovation Transfer**: Nigerian participants brought German efficiency methodologies to their startups, while German participants adopted Nigerian innovation-on-a-budget approaches
- **Market Expansion**: 67% of participating businesses expanded internationally within 18 months
- **Knowledge Networks**: Ongoing collaborations have resulted in 23 joint ventures between Nigerian and German companies
- **Policy Influence**: Exchange alumni have advised their respective governments on bilateral trade and development policies

**Overcoming Challenges: Cultural Sensitivity and Authenticity**

Cross-cultural exchange programs are not without challenges. Issues of cultural sensitivity, power dynamics, and maintaining authenticity while adapting foreign practices require careful navigation.

JCI Nigeria has developed several strategies to address these challenges:

**Cultural Mentorship**: Each participant is paired with both local and cultural mentors throughout the process.

**Adaptation Workshops**: Specialized sessions help participants modify learned practices to fit their cultural contexts without losing effectiveness.

**Reverse Exchanges**: Regular hosting of international participants in Nigeria ensures balanced cultural exchange and prevents neo-colonial dynamics.

**Continuous Feedback Loops**: Regular check-ins with alumni ensure programs evolve based on real-world experiences and outcomes.

**The Digital Evolution: Virtual Exchange Platforms**

The COVID-19 pandemic forced a rapid evolution in exchange program delivery. JCI Nigeria's response—the development of sophisticated virtual exchange platforms—has actually enhanced program accessibility and impact.

The virtual format allows for:
- **Increased Participation**: Programs can now accommodate 300% more participants
- **Extended Duration**: Virtual exchanges can run for months rather than weeks
- **Reduced Barriers**: Financial and visa challenges no longer limit participation
- **Enhanced Documentation**: Digital platforms enable better tracking and measurement of outcomes

**Measuring Success: Beyond Satisfaction Scores**

JCI Nigeria employs a comprehensive framework to assess the impact of cross-cultural exchange programs:

**Individual Impact Metrics**:
- Leadership competency assessments (pre/post)
- Cultural intelligence quotient improvements
- Network expansion and quality measures
- Career advancement tracking

**Organizational Impact Metrics**:
- Innovation adoption rates
- International collaboration increases
- Revenue/impact growth post-exchange
- Knowledge transfer within organizations

**Community Impact Metrics**:
- Number of cross-cultural projects initiated
- Community problems solved using international insights
- Local adaptation of global best practices
- Mentorship and knowledge sharing by alumni

The data consistently shows remarkable outcomes across all metrics, with participants demonstrating significantly higher leadership effectiveness, broader professional networks, and greater community impact compared to control groups.

**Future Directions: Scaling Cross-Cultural Impact**

Looking ahead, JCI Nigeria is expanding its cross-cultural exchange programs in several exciting directions:

**African Continental Exchange**: A pan-African program connecting young leaders across all 54 African countries to share continental best practices and build intra-African partnerships.

**Thematic Exchanges**: Specialized programs focused on specific challenges like climate change, healthcare innovation, and technological advancement.

**Alumni Networks**: Formal networks that maintain connections and enable ongoing collaboration between exchange participants from different cohorts and countries.

**Corporate Partnerships**: Collaborations with multinational corporations to create exchange opportunities within private sector contexts.

**The Call for Global Participation**

As these programs continue to demonstrate their transformative power, JCI Nigeria is actively seeking partners from around the world to expand cross-cultural exchange opportunities.

"Every culture has something unique to contribute to solving global challenges," says Oluwatoyin Atanda, National President of JCI Nigeria. "Our exchange programs are not just developing better leaders—they're building bridges toward a more collaborative and understanding world."

**Conclusion: Building Tomorrow's Global Leaders Today**

Cross-cultural exchange programs represent more than educational opportunities—they are investments in a more connected, collaborative, and culturally intelligent future. Through these initiatives, JCI Nigeria is not just developing leaders who can operate globally; they're nurturing individuals who can build bridges, solve complex problems, and create positive change across cultural boundaries.

The stories of transformation, innovation, and lasting friendships that emerge from these programs remind us that in our interconnected world, the ability to understand, appreciate, and collaborate across cultures is not just an asset—it's an imperative.

*Interested in participating in JCI Nigeria's cross-cultural exchange programs? Applications for the 2025 cohort open February 1st. Visit www.jcinigeria.org/exchanges for more information.*`,
      category: "global-insights",
      author: {
        name: "Prof. Ngozi Iwuala",
        role: "International Programs Director",
        organization: "JCI Nigeria",
        image: "/api/placeholder/100/100",
        bio: "Professor Iwuala is an expert in cross-cultural leadership development with extensive experience in international education.",
      },
      date: "2025-01-05",
      readTime: "15 min read",
      tags: [
        "Global Leadership",
        "Cross-Cultural Exchange",
        "International Programs",
        "Cultural Intelligence",
      ],
      views: 2341,
      likes: 178,
      comments: 34,
      shares: 67,
      image: "/api/placeholder/800/500",
      featured: false,
      trending: true,
    },
    {
      id: 4,
      title:
        "Community-Driven Solutions: How Local Chapters Are Tackling Nigeria's Development Challenges",
      slug: "community-driven-solutions-local-chapters-development",
      excerpt:
        "A comprehensive look at grassroots initiatives led by JCI Nigeria local chapters, showcasing innovative approaches to education, healthcare, environmental sustainability, and economic empowerment.",
      content: `While headlines often focus on large-scale development initiatives and government programs, some of the most innovative and effective solutions to Nigeria's challenges are emerging from grassroots efforts led by JCI Nigeria's local chapters. These community-driven projects demonstrate the power of local knowledge, cultural understanding, and sustained commitment in creating meaningful change.

**The Local Chapter Advantage**

JCI Nigeria's 200+ local chapters represent a unique asset in the development landscape. Unlike external development organizations that may struggle with cultural context or temporary presence, these chapters are permanently embedded in their communities, led by individuals who understand local nuances and have long-term stakes in successful outcomes.

This embedded approach yields several critical advantages:

- **Cultural Authenticity**: Solutions are designed by and for community members
- **Sustained Commitment**: Projects continue beyond funding cycles
- **Cost Effectiveness**: Lower overhead and volunteer-driven implementation
- **Rapid Adaptation**: Ability to quickly modify approaches based on community feedback
- **Trust Building**: Local leadership enhances community buy-in and participation

**Education Innovation: The Bauchi Digital Learning Revolution**

In Bauchi State, where rural schools often lack basic educational resources, the JCI Bauchi chapter developed an innovative solution that has transformed learning outcomes across 50 primary schools.

The "Digital Learning Pods" program creates solar-powered learning stations equipped with tablets loaded with locally-relevant educational content. What makes this initiative unique is its community-centered approach:

**Community Ownership**: Each school community contributes to pod installation and maintenance, ensuring local buy-in and sustainability.

**Local Content**: Rather than using generic educational software, the program features content developed in local languages by Nigerian educators, making learning more relatable and effective.

**Teacher Empowerment**: The program includes comprehensive teacher training, transforming educators from passive content deliverers to facilitative learning guides.

**Measurable Impact**: Within 18 months, participating schools showed:
- 45% improvement in literacy rates
- 38% increase in school attendance
- 67% reduction in dropout rates
- 89% of teachers reporting increased confidence in technology integration

Maryam Aliyu, a teacher at one of the participating schools, shares: "These pods have not just changed how our children learn—they've changed how they see their potential. Students who never imagined accessing university education are now planning their academic futures."

**Healthcare Access: The Rivers State Mobile Clinic Network**

Healthcare access remains a critical challenge in many Nigerian communities, particularly in riverine areas of Rivers State where transportation barriers limit access to medical facilities. JCI Port Harcourt's response has been the development of a sophisticated mobile clinic network that goes beyond simple service delivery.

**Integrated Health Services**: Each mobile clinic provides:
- Basic medical consultations and treatments
- Preventive care and health education
- Maternal and child health services
- Mental health support and counseling
- Health insurance registration assistance

**Community Health Worker Training**: The program has trained over 200 community health workers who serve as permanent health ambassadors in their communities, ensuring continuity of care between clinic visits.

**Data-Driven Approach**: Each clinic is equipped with digital health records systems that track patient outcomes and community health trends, enabling evidence-based program improvements.

**Sustainable Financing**: The program operates through a combination of government partnerships, private sector support, and community contributions, creating a sustainable funding model.

The results speak for themselves:
- 78% reduction in infant mortality rates in served communities
- 56% increase in maternal health service utilization
- 89% of participants reporting improved health knowledge
- 234 successful referrals to specialist care facilities

Dr. Emeka Okonkwo, the program coordinator, explains: "We're not just providing healthcare—we're building health systems. Our goal is to create communities that can maintain and improve their health outcomes independently."

**Environmental Sustainability: The Lagos Urban Farming Initiative**

In densely populated Lagos, where green spaces are increasingly rare and food security is a growing concern, JCI Lagos Island chapter launched an ambitious urban farming program that transforms unused urban spaces into productive agricultural areas.

**Vertical Farming Systems**: Using innovative vertical growing systems, the program maximizes food production in minimal space while requiring 90% less water than traditional farming.

**Community Gardens**: Over 40 community gardens have been established in schools, residential complexes, and public spaces, providing fresh produce while building community connections.

**Youth Employment**: The program has created employment opportunities for over 150 young people, training them in modern agricultural techniques and business management.

**Circular Economy Integration**: Food waste from local markets is composted to fertilize the gardens, creating a closed-loop system that reduces waste while improving soil quality.

**Technology Integration**: IoT sensors monitor soil conditions, water levels, and plant health, enabling data-driven farming decisions and training participants in agricultural technology.

The environmental and economic impact has been substantial:
- 45 tons of fresh produce grown annually
- 67% reduction in food waste in participating communities
- 156 jobs created directly and indirectly
- 23% reduction in household food expenses for participating families
- 89% of participants reporting improved nutrition

**Economic Empowerment: The Kano Micro-Finance Cooperative**

Traditional banking services often exclude Nigeria's informal sector workers, leaving millions without access to credit and savings opportunities. JCI Kano's micro-finance cooperative addresses this gap through an innovative community-based financial services model.

**Peer-to-Peer Lending**: Members contribute to a common fund that provides micro-loans to fellow members based on community endorsement rather than traditional collateral requirements.

**Financial Literacy Training**: Every participant completes comprehensive financial literacy training covering budgeting, saving, investing, and business planning.

**Digital Integration**: Mobile money platforms enable easy transactions and record-keeping, even for members with limited literacy.

**Business Mentorship**: Successful local entrepreneurs provide ongoing mentorship to loan recipients, increasing business success rates.

**Gender Focus**: Special provisions ensure equal access for women, who represent 68% of program participants.

The cooperative's success metrics are impressive:
- 96% loan repayment rate
- Average 34% increase in member incomes
- 89% of business loans resulting in successful enterprise establishment
- 156 new businesses launched by program graduates
- 78% of participants reporting improved financial security

Fatima Ibrahim, a seamstress who received her first business loan through the program, shares: "Before joining the cooperative, I could barely afford fabric for my work. Now I employ three other women and am saving for my children's university education."

**Technology for Social Good: The Abuja Digital Inclusion Project**

As Nigeria's digital economy grows rapidly, many communities risk being left behind due to limited access to technology and digital skills. JCI Abuja's digital inclusion project works to bridge this divide through comprehensive digital literacy programs.

**Mobile Tech Labs**: Solar-powered vans equipped with computers and internet connectivity bring digital learning directly to underserved communities.

**Intergenerational Learning**: Programs pair tech-savvy youth with older community members, creating mutual learning opportunities that strengthen community bonds.

**Local Language Content**: Digital literacy materials are available in major Nigerian languages, making learning more accessible to diverse communities.

**Career Pathway Programs**: Advanced participants can access specialized training in high-demand digital skills like web development, digital marketing, and data analysis.

**Women's Digital Empowerment**: Special programs focus on women's participation in the digital economy, providing training in e-commerce, online business management, and digital financial services.

The project's reach continues to expand:
- 2,400 people trained in basic digital literacy
- 340 participants completing advanced technical training
- 89 online businesses launched by program graduates
- 156% increase in digital banking adoption in target communities
- 67% of participants reporting improved employment prospects

**Scaling Success: The National Replication Framework**

The success of these local initiatives has not gone unnoticed. JCI Nigeria has developed a comprehensive framework for replicating successful programs across different chapters and contexts.

**Program Documentation**: Detailed implementation guides capture not just what worked, but why it worked and how to adapt approaches for different contexts.

**Cross-Chapter Mentorship**: Successful program leaders mentor chapters implementing similar initiatives, providing ongoing support and troubleshooting.

**Resource Sharing**: A national resource pool enables chapters to share equipment, expertise, and funding opportunities.

**Impact Measurement**: Standardized metrics allow for comparison and learning across different implementations.

**Government Partnerships**: Successful programs often evolve into formal partnerships with government agencies, scaling impact beyond individual chapters.

**Challenges and Lessons Learned**

These community-driven initiatives, while highly successful, have faced significant challenges that offer valuable lessons for other development efforts:

**Funding Sustainability**: Most programs struggle with long-term funding, leading to innovative approaches like the cooperative models and government partnerships.

**Volunteer Burnout**: Entirely volunteer-driven programs sometimes struggle with consistency, leading to the development of sustainable leadership structures.

**External Recognition**: Many highly effective local programs remain unknown to the broader development community, highlighting the need for better documentation and communication.

**Government Relations**: Navigating relationships with local and federal government agencies requires careful diplomacy and clear value propositions.

**Cultural Sensitivity**: Even locally-led programs must carefully navigate cultural and religious sensitivities to maintain broad community support.

**The Ripple Effect: Beyond Direct Impact**

Perhaps the most significant aspect of these community-driven solutions is their ripple effects. Participants don't just benefit from the programs—they become advocates and implementers of similar initiatives in their own communities.

**Leadership Development**: Program participants often emerge as community leaders, taking on roles in other development initiatives.

**Model Replication**: Successful approaches are informally replicated by participants in their home communities.

**Mindset Change**: Programs shift community attitudes toward self-reliance and collaborative problem-solving.

**Economic Multipliers**: Business and employment creation benefits extend beyond direct participants to families and suppliers.

**Social Cohesion**: Community-based programs strengthen social bonds and collective efficacy.

**Future Directions: Expanding the Model**

As these programs continue to demonstrate their effectiveness, JCI Nigeria is exploring several avenues for expansion:

**Corporate Partnerships**: Engaging private sector partners to provide funding, expertise, and market access for community initiatives.

**International Collaboration**: Sharing successful models with JCI chapters in other countries while learning from international best practices.

**Government Integration**: Working with government agencies to integrate successful community models into official development programs.

**Academic Partnerships**: Collaborating with universities to conduct research on community-driven development approaches.

**Technology Enhancement**: Leveraging emerging technologies like artificial intelligence and blockchain to enhance program effectiveness.

**Youth Leadership Pipeline**: Developing systematic approaches to identify and nurture young community leaders.

**Conclusion: The Power of Local Solutions**

The success of JCI Nigeria's local chapter initiatives demonstrates that effective development solutions often emerge from deep community understanding, sustained commitment, and innovative adaptation of global best practices to local contexts. These grassroots programs prove that transformative change doesn't always require massive budgets or complex bureaucracies—it requires passionate individuals who understand their communities and are committed to long-term impact.

As Nigeria continues to face development challenges, the model pioneered by JCI local chapters offers a blueprint for sustainable, community-driven solutions. These initiatives remind us that the most powerful development tool is often local leadership armed with global knowledge and unwavering commitment to community transformation.

*To learn more about JCI Nigeria's local chapter initiatives or to support community-driven development efforts, visit www.jcinigeria.org/localchapters or contact your nearest JCI chapter.*`,
      category: "community-impact",
      author: {
        name: "Engr. Tunde Bakare",
        role: "National Programs Coordinator",
        organization: "JCI Nigeria",
        image: "/api/placeholder/100/100",
        bio: "Engr. Bakare oversees community development programs across JCI Nigeria's 200+ local chapters.",
      },
      date: "2025-01-03",
      readTime: "18 min read",
      tags: [
        "Community Development",
        "Local Chapters",
        "Grassroots Innovation",
        "Healthcare",
        "Education",
        "Sustainability",
      ],
      views: 1876,
      likes: 134,
      comments: 23,
      shares: 45,
      image: "/api/placeholder/800/500",
      featured: false,
      trending: false,
    },
    {
      id: 5,
      title:
        "Youth Mental Health: Breaking Stigmas Through Community Conversations",
      slug: "youth-mental-health-breaking-stigmas-community",
      excerpt:
        "JCI Nigeria's groundbreaking mental health initiative is creating safe spaces for young people to discuss mental wellness, access professional support, and build resilience in their communities.",
      content: `Mental health remains one of the most pressing yet underaddressed challenges facing young Nigerians today. Despite growing awareness globally, cultural stigma, limited resources, and lack of accessible services continue to create barriers to mental wellness support. JCI Nigeria's comprehensive mental health initiative is changing this narrative by creating culturally sensitive, community-based approaches to mental health awareness, support, and treatment.

**The Silent Crisis: Understanding the Scope**

Mental health challenges among Nigerian youth have reached critical proportions. Recent studies indicate that over 30% of young Nigerians experience symptoms of anxiety or depression, yet fewer than 5% receive professional mental health support. The statistics become even more alarming when we consider the intersection of mental health with other challenges:

- **Academic Pressure**: 78% of university students report high levels of stress related to academic and career pressures
- **Economic Anxiety**: Rising unemployment and economic uncertainty affect 89% of young adults' mental wellness
- **Social Media Impact**: 65% of young people report negative mental health effects from social media use
- **Family Expectations**: Traditional family pressures contribute to mental health challenges for 72% of respondents
- **Identity Struggles**: Questions of cultural identity in a globalizing world affect 58% of young Nigerians

Despite these overwhelming statistics, cultural stigma means that mental health struggles are often viewed as personal weakness or spiritual problems rather than legitimate health concerns requiring professional intervention.

**Breaking the Silence: JCI Nigeria's Comprehensive Approach**

JCI Nigeria's mental health initiative, launched in 2023 under the theme "Mind Matters," represents a comprehensive approach to addressing youth mental health challenges. Rather than simply importing Western mental health models, the program carefully integrates global best practices with Nigerian cultural values and contexts.

**Community-Based Peer Support Networks**

At the heart of the program are peer support networks established in universities, communities, and workplaces across Nigeria. These networks, led by trained young volunteers, provide:

- **Safe Conversation Spaces**: Regular gatherings where young people can share experiences without judgment
- **Peer Counseling**: Basic counseling skills training for network leaders
- **Crisis Intervention**: Clear protocols for identifying and responding to mental health emergencies
- **Resource Connection**: Links to professional mental health services when needed
- **Advocacy Training**: Skills development for mental health advocacy and stigma reduction

**Digital Mental Health Platforms**

Recognizing that many young people prefer digital communication, JCI Nigeria developed innovative online platforms that provide:

- **Anonymous Support Forums**: Moderated spaces for sharing experiences and seeking advice
- **Mental Health Assessments**: Self-screening tools that help users understand their mental health status
- **Resource Libraries**: Culturally relevant mental health information in multiple Nigerian languages
- **Virtual Counseling**: Access to professional counselors through secure video platforms
- **Wellness Tracking**: Apps that help users monitor their mental health and identify patterns

**Professional Training and Capacity Building**

The program recognizes that sustainable mental health support requires professional infrastructure. Key components include:

- **Counselor Training**: Specialized programs for mental health professionals focusing on youth-specific and culturally competent approaches
- **Teacher Training**: Educational programs for educators to identify and respond to student mental health needs
- **Community Leader Education**: Training for religious and traditional leaders on mental health awareness and appropriate referral practices
- **Family Education**: Programs that help families understand and support members with mental health challenges

**Case Study: The University of Lagos Transformation**

The University of Lagos (UNILAG) campus became one of the first comprehensive implementation sites for JCI Nigeria's mental health program. The transformation has been remarkable:

**Before Implementation**:
- No formal mental health services on campus
- High rates of academic-related anxiety and depression
- Multiple student suicides annually
- Limited awareness of mental health resources
- Strong stigma around mental health discussions

**Program Implementation**:
JCI Nigeria worked with university administration to establish:
- Peer support networks in all faculties
- Professional counseling center with trained staff
- Mental health awareness campaigns integrated into orientation programs
- Crisis intervention protocols involving security, medical, and counseling services
- Regular mental health screening programs

**Results After Two Years**:
- 89% reduction in reported suicides
- 156% increase in students seeking mental health support
- 78% of students reporting improved mental health awareness
- 67% decrease in academic-related anxiety among participants
- 234 peer counselors trained and active across the campus

Adunni Adebayo, a final-year psychology student and peer counselor, shares: "Before this program, talking about feeling depressed or anxious was seen as weakness. Now, students actively look out for each other, and seeking help is seen as strength."

**Addressing Cultural Barriers: The Integration Approach**

One of the program's most innovative aspects is its approach to cultural integration. Rather than dismissing traditional beliefs about mental health, the program works to bridge traditional and modern approaches:

**Religious Leader Partnerships**: Training programs help religious leaders understand mental health from both spiritual and medical perspectives, enabling them to provide appropriate support while encouraging professional treatment when needed.

**Traditional Medicine Integration**: Collaboration with traditional healers creates referral systems that respect cultural preferences while ensuring access to evidence-based treatment.

**Family-Centered Approaches**: Mental health support programs include family members, recognizing the central role of family in Nigerian culture.

**Language Accessibility**: All materials and services are available in major Nigerian languages, ensuring cultural and linguistic accessibility.

**Community Ceremonies**: Traditional community gathering formats are used to conduct mental health awareness sessions, making the content more culturally familiar and acceptable.

**The Workplace Mental Health Extension**

Recognizing that mental health challenges don't end with graduation, JCI Nigeria expanded the program to workplace settings. The "Workplace Wellness" component includes:

**Corporate Partnerships**: Collaborations with major Nigerian employers to establish workplace mental health programs.

**Employee Assistance Programs**: Confidential counseling services for employees experiencing mental health challenges.

**Management Training**: Programs that teach managers to recognize mental health issues and create supportive work environments.

**Stress Management Workshops**: Regular sessions on managing work-related stress and maintaining work-life balance.

**Mental Health Policies**: Support for companies developing comprehensive mental health policies and benefits.

Early results from workplace interventions show:
- 45% reduction in stress-related sick leave
- 67% improvement in employee satisfaction scores
- 89% of managers reporting increased confidence in handling mental health situations
- 78% reduction in workplace conflicts attributed to stress and mental health issues

**Innovation in Crisis Response: The 24/7 Support Network**

Mental health crises don't follow business hours, which led JCI Nigeria to develop a comprehensive crisis response system:

**24/7 Helpline**: Staffed by trained counselors, available in multiple languages, with clear protocols for different types of mental health emergencies.

**Mobile Crisis Teams**: Rapid response teams that can provide in-person support during severe mental health crises.

**Hospital Partnerships**: Agreements with medical facilities ensure appropriate care for individuals experiencing psychiatric emergencies.

**Family Support**: Services that help families understand and cope with mental health crises.

**Follow-up Care**: Systematic follow-up programs ensure individuals receive continued support after crisis intervention.

The crisis response system has handled over 2,300 calls in its first year, with a 94% success rate in connecting individuals with appropriate care and support.

**Measuring Impact: Beyond Numbers**

While quantitative metrics demonstrate the program's reach and effectiveness, the qualitative impact tells an equally compelling story:

**Personal Transformation Stories**:
- Students reporting improved academic performance after receiving mental health support
- Young professionals describing better workplace relationships and productivity
- Families sharing how education programs helped them support struggling members
- Community leaders explaining how mental health awareness changed their counseling approaches

**Community Culture Shifts**:
- Increased openness in discussing mental health challenges
- Reduced discrimination against individuals with mental health conditions
- Greater integration of mental health considerations in community planning
- Improved support systems for vulnerable community members

**Systemic Changes**:
- University policies now include mental health considerations
- Workplace mental health benefits have become more common
- Government agencies are beginning to integrate mental health into youth programs
- Healthcare facilities are expanding mental health services

**Challenges and Adaptive Responses**

The program has faced significant challenges that have led to important adaptations:

**Funding Sustainability**: Mental health programs require long-term investment, leading to the development of innovative funding models including corporate partnerships, government collaborations, and community contributions.

**Professional Shortage**: Limited numbers of mental health professionals necessitated the development of comprehensive peer support models and technology-enabled service delivery.

**Cultural Resistance**: Persistent stigma in some communities required more intensive community engagement and gradual approach strategies.

**Quality Assurance**: Ensuring consistent quality across diverse implementation sites led to the development of standardized training programs and regular supervision systems.

**Government Coordination**: Working with various government agencies required careful navigation of bureaucratic processes and clear demonstration of program value.

**The Ripple Effect: Inspiring National Change**

JCI Nigeria's mental health initiative has catalyzed broader changes in how Nigeria approaches youth mental health:

**Policy Influence**: Program data and advocacy efforts have contributed to new government policies supporting youth mental health services.

**Academic Integration**: Nigerian universities are increasingly incorporating mental health components into their student services.

**Healthcare System Changes**: Hospitals and clinics are expanding mental health services and training programs.

**Community Awareness**: General public awareness and acceptance of mental health issues has improved significantly in program areas.

**Professional Development**: The program has contributed to the training of hundreds of mental health professionals.

**International Recognition and Collaboration**

The success of JCI Nigeria's mental health initiative has attracted international attention, leading to several collaborative opportunities:

**WHO Partnership**: Collaboration with the World Health Organization on developing culturally appropriate mental health interventions for African contexts.

**Academic Research**: Partnerships with international universities studying community-based mental health approaches in developing countries.

**JCI Global Network**: Sharing of best practices with other JCI national organizations facing similar mental health challenges.

**Funding Partnerships**: International development organizations providing support for program expansion.

**Knowledge Exchange**: Participation in global mental health conferences and forums.

**Future Directions: Scaling and Innovation**

Looking ahead, JCI Nigeria's mental health program is expanding in several key areas:

**National Scaling**: Plans to establish programs in all 36 Nigerian states and the Federal Capital Territory.

**Specialized Programs**: Development of targeted interventions for specific populations such as refugees, rural communities, and individuals with disabilities.

**Technology Innovation**: Investment in artificial intelligence and machine learning tools for mental health screening and support.

**Research and Evaluation**: Comprehensive research programs to document impact and contribute to global mental health knowledge.

**Professional Training**: Expansion of mental health professional training programs to address workforce shortages.

**Prevention Focus**: Increased emphasis on preventing mental health problems through early intervention and resilience building.

**The Call for Collective Action**

Mental health challenges affect entire communities, and solutions require collective action. JCI Nigeria's initiative demonstrates that with proper planning, cultural sensitivity, and sustained commitment, it's possible to create meaningful change in how communities approach mental wellness.

The program's success offers several lessons for other organizations and communities:

1. **Cultural Integration is Essential**: Mental health interventions must respect and integrate local cultural values to be effective.

2. **Peer Support is Powerful**: Well-trained peer supporters can provide valuable services while helping to reduce stigma.

3. **Technology Enhances Access**: Digital platforms can significantly expand access to mental health resources and support.

4. **Community Engagement is Crucial**: Successful programs require buy-in from community leaders, families, and institutions.

5. **Professional Support is Necessary**: Peer support and community programs must be backed by professional mental health services.

6. **Long-term Commitment is Required**: Mental health initiatives require sustained investment and commitment to achieve lasting impact.

**Conclusion: Building a Mentally Healthy Generation**

JCI Nigeria's mental health initiative represents more than a program—it's a movement toward creating a generation of young Nigerians who understand that mental health is as important as physical health, who have access to support when they need it, and who can thrive personally and professionally.

The initiative proves that with creativity, cultural sensitivity, and commitment, it's possible to address even the most challenging social issues. As the program continues to expand and evolve, it offers hope not just for Nigerian youth, but as a model for community-based mental health approaches worldwide.

The journey toward mental health awareness and support is far from complete, but JCI Nigeria's initiative has begun an important conversation and created sustainable systems for support. Through continued commitment, innovation, and community engagement, the vision of mentally healthy Nigerian communities is becoming reality.

*If you or someone you know needs mental health support, JCI Nigeria's helpline is available 24/7. Call 0800-MIND-HELP or visit www.jcinigeria.org/mentalhealth for resources and support.*`,
      category: "youth-development",
      author: {
        name: "Dr. Kemi Olowu",
        role: "Mental Health Program Director",
        organization: "JCI Nigeria",
        image: "/api/placeholder/100/100",
        bio: "Dr. Olowu is a clinical psychologist specializing in community mental health and youth development programs.",
      },
      date: "2025-01-01",
      readTime: "16 min read",
      tags: [
        "Mental Health",
        "Youth Development",
        "Community Support",
        "Healthcare",
        "Stigma Reduction",
      ],
      views: 5432,
      likes: 412,
      comments: 89,
      shares: 234,
      image: "/api/placeholder/800/500",
      featured: true,
      trending: true,
    },
    {
      id: 6,
      title:
        "Sustainable Business Models: How Nigerian Youth Are Redefining Social Entrepreneurship",
      slug: "sustainable-business-models-nigerian-youth-social-entrepreneurship",
      excerpt:
        "Explore how young Nigerian entrepreneurs are creating profitable businesses that address social challenges, setting new standards for sustainable and impactful enterprise development.",
      content: `The traditional view of business as purely profit-driven is being challenged by a new generation of Nigerian entrepreneurs who refuse to choose between financial success and social impact. These young leaders are pioneering innovative business models that prove profitability and social good are not mutually exclusive, creating sustainable enterprises that address Nigeria's most pressing challenges while generating significant returns.

**The Rise of Social Entrepreneurship in Nigeria**

Nigeria's young population, combined with significant social challenges and limited government resources, has created fertile ground for social entrepreneurship. Unlike traditional charity models or purely commercial ventures, social enterprises offer sustainable solutions that can scale impact while maintaining financial viability.

Recent research indicates that social enterprises in Nigeria have grown by 340% over the past five years, with young entrepreneurs (ages 18-35) founding 78% of these ventures. This growth represents more than just business opportunity—it reflects a fundamental shift in how young Nigerians view their role in society.

**Key Characteristics of Nigerian Social Enterprises**

Successful social enterprises in Nigeria share several distinctive characteristics that set them apart from both traditional businesses and conventional NGOs:

**Community-Rooted Solutions**: Rather than imposing external solutions, these enterprises emerge from deep understanding of local challenges and leverage community assets and knowledge.

**Technology Integration**: Most successful social enterprises use technology not as an end in itself, but as a tool to scale impact and improve efficiency.

**Collaborative Ecosystems**: These ventures actively build partnerships with government, traditional businesses, NGOs, and communities to maximize impact.

**Sustainable Revenue Models**: Multiple revenue streams ensure financial sustainability while maintaining social focus.

**Impact Measurement**: Rigorous tracking of both social impact and financial performance ensures accountability to all stakeholders.

**Case Study 1: GreenCycle Technologies - Waste to Wealth**

Founded by 28-year-old Emeka Okafor in Lagos, GreenCycle Technologies exemplifies how social enterprises can address environmental challenges while creating economic opportunities.

**The Problem**: Lagos generates over 13,000 tons of waste daily, with less than 40% receiving proper treatment. Informal waste pickers face dangerous working conditions while earning minimal income.

**The Solution**: GreenCycle created a comprehensive waste management ecosystem that:
- Organizes informal waste pickers into cooperatives
- Provides training, equipment, and safety gear
- Establishes collection and sorting centers
- Processes recyclable materials for sale to manufacturers
- Creates value-added products from processed waste

**Business Model Innovation**:
- **Revenue Streams**: Tipping fees from businesses, sales of processed materials, consulting services for other cities, and government contracts
- **Community Investment**: 30% of profits reinvested in community development projects
- **Technology Integration**: Mobile app connecting waste generators with collectors, GPS tracking for efficient route optimization, and blockchain-based reward system for participants

**Impact Metrics** (After 3 years):
- 2,400 waste pickers organized into 48 cooperatives
- Average income increase of 340% for participating waste pickers
- 45,000 tons of waste processed annually
- 78% reduction in waste-related environmental problems in served communities
- ₦2.8 billion in annual revenue
- Expansion to six Nigerian cities

Emeka explains: "We didn't set out to build just another waste management company. We wanted to prove that environmental sustainability and social justice can be profitable. Our success shows that business can be a force for good without sacrificing financial viability."

**Case Study 2: EduBridge Africa - Democratizing Quality Education**

Founded by Aisha Abdullahi, a 26-year-old former teacher from Kano, EduBridge Africa addresses educational inequality through innovative technology and finance solutions.

**The Problem**: Over 10 million Nigerian children are out of school, with quality education remaining expensive and geographically limited.

**The Innovation**: EduBridge created a hybrid learning platform that combines:
- High-quality video lessons produced by expert Nigerian teachers
- Interactive learning modules adapted to Nigerian curricula
- Peer-to-peer tutoring networks
- Micro-financing options for families
- Community learning centers in underserved areas

**Sustainable Business Model**:
- **Subscription Services**: Families pay affordable monthly fees for platform access
- **Corporate Partnerships**: Companies sponsor employee children's education through EduBridge
- **Government Contracts**: Public schools integrate EduBridge content into their curricula
- **Franchise Learning Centers**: Entrepreneurs can establish local learning centers using EduBridge systems
- **Assessment Services**: Schools pay for standardized assessment and analytics services

**Social Impact Achievements**:
- 145,000 students actively using the platform
- 67% improvement in academic performance among users
- 89% of out-of-school children who join the program continue their education
- 234 community learning centers established
- 78% cost reduction in quality education delivery
- ₦1.9 billion in annual revenue
- Expansion to Ghana, Kenya, and Uganda

Aisha reflects: "Education is the foundation of everything else we want to achieve in Africa. By making quality education accessible and affordable, we're not just changing individual lives—we're building the human capital that will transform our continent."

**Case Study 3: HealthConnect Nigeria - Rural Healthcare Revolution**

Dr. Chidi Okwu, a 31-year-old physician, founded HealthConnect Nigeria to address the critical shortage of healthcare services in rural areas through innovative telemedicine and community health worker models.

**The Challenge**: Rural Nigerian communities often lack access to healthcare facilities and professional medical services, leading to preventable deaths and chronic health conditions.

**The Solution**: HealthConnect created a comprehensive rural healthcare ecosystem featuring:
- Telemedicine platforms connecting rural patients with urban specialists
- Trained community health workers providing basic care and health education
- Mobile health clinics for regular community visits
- Health insurance micro-payment systems
- Community-based pharmaceutical distribution networks

**Revenue Model Innovation**:
- **Telemedicine Consultation Fees**: Affordable per-consultation charges
- **Health Insurance Premiums**: Community-based insurance schemes
- **Pharmaceutical Sales**: Ethical drug distribution with fair pricing
- **Corporate Health Services**: Occupational health services for rural businesses
- **Training and Certification**: Programs for community health workers in other regions

**Transformative Impact**:
- 89,000 patients served across 156 rural communities
- 67% reduction in preventable deaths in served communities
- 78% increase in maternal health service utilization
- 234 community health workers trained and employed
- 45% reduction in healthcare costs for rural families
- ₦980 million in annual revenue
- Partnerships with 12 state governments

Dr. Okwu emphasizes: "Healthcare should not be a luxury available only to those in urban areas. Our model proves that rural healthcare can be both high-quality and financially sustainable when you design systems that work for the community."

**Innovative Financing Models**

Nigerian social enterprises have pioneered creative financing approaches that support both growth and social impact:

**Blended Finance Structures**: Combining grants, debt, and equity to reduce risk while maintaining social focus.

**Impact Bonds**: Pay-for-success models where investors are repaid based on achieved social outcomes.

**Community Investment**: Local communities contribute resources, land, or labor in exchange for equity or revenue sharing.

**Corporate Social Responsibility Partnerships**: Strategic partnerships with multinational corporations seeking authentic social impact.

**Crowdfunding Campaigns**: Leveraging social media and digital platforms to raise capital from diverse sources.

**Revenue Sharing with Beneficiaries**: Models where the communities served become stakeholders in the enterprise's success.

**Technology as an Enabler**

Technology plays a crucial role in enabling social enterprises to achieve scale and impact:

**Mobile-First Platforms**: Leveraging Nigeria's high mobile phone penetration to reach underserved communities.

**Data Analytics**: Using data to optimize operations, measure impact, and make evidence-based decisions.

**Blockchain Technology**: Ensuring transparency and trust in transactions and impact reporting.

**Artificial Intelligence**: Automating processes and personalizing services to improve efficiency and effectiveness.

**IoT Solutions**: Monitoring systems that enable remote management and quality assurance.

**Digital Payment Systems**: Facilitating financial inclusion and reducing transaction costs.

**The Ecosystem Supporting Social Entrepreneurship**

Nigeria's social entrepreneurship sector benefits from a growing support ecosystem:

**Incubators and Accelerators**: Programs like Social Enterprise Academy, Fate Foundation, and Ventures Platform provide training, mentorship, and funding.

**Impact Investors**: Organizations like Development Partners International, Acumen Academy, and local impact funds provide patient capital.

**Government Support**: Initiatives like the N-Power program and various state-level entrepreneurship programs provide policy support and funding.

**Academic Institutions**: Universities are developing social entrepreneurship curricula and research programs.

**Corporate Partners**: Multinational corporations increasingly partner with social enterprises for authentic community engagement.

**International Networks**: Global organizations provide knowledge sharing and funding opportunities.

**Measuring Success: Beyond Profit**

Social enterprises require sophisticated measurement systems that track both financial and social performance:

**Social Return on Investment (SROI)**: Quantifying social value creation in monetary terms.

**Theory of Change Frameworks**: Logic models that connect activities to long-term social outcomes.

**Impact Metrics**: Standardized measures of social and environmental impact.

**Financial Sustainability Indicators**: Traditional business metrics ensuring long-term viability.

**Stakeholder Satisfaction Surveys**: Regular feedback from communities, customers, and partners.

**Third-Party Impact Assessments**: Independent evaluation of social and environmental impact.

**Challenges and Adaptive Strategies**

Despite their success, social enterprises face significant challenges:

**Funding Gaps**: Access to appropriate capital remains limited, leading to innovative financing approaches.

**Regulatory Barriers**: Complex regulations often designed for traditional businesses, prompting advocacy for policy reform.

**Market Education**: Many stakeholders don't understand social enterprise models, requiring extensive education efforts.

**Talent Acquisition**: Finding individuals with both business skills and social commitment can be challenging.

**Scale vs. Impact**: Maintaining social focus while scaling operations requires careful management.

**Competition from Traditional Models**: Competing with purely commercial enterprises or charity organizations.

**Future Trends and Opportunities**

Several trends are shaping the future of social entrepreneurship in Nigeria:

**Sectoral Expansion**: Movement beyond traditional sectors like health and education into areas like housing, transportation, and financial services.

**Technology Integration**: Increased use of emerging technologies like artificial intelligence and blockchain.

**Rural Focus**: Growing attention to rural communities and agricultural value chains.

**Youth Unemployment Solutions**: Enterprises specifically designed to create employment for young people.

**Climate Change Adaptation**: Businesses addressing environmental challenges while creating economic opportunities.

**Cross-Border Expansion**: Nigerian social enterprises expanding across Africa and globally.

**Government Partnership Models**: Innovative public-private partnerships for service delivery.

**The Role of JCI Nigeria**

JCI Nigeria has played a crucial role in supporting social entrepreneurship through:

**Training Programs**: Comprehensive social entrepreneurship education and skills development.

**Networking Opportunities**: Connecting social entrepreneurs with mentors, partners, and investors.

**Advocacy Efforts**: Policy advocacy for supportive regulatory environments.

**Recognition Programs**: Awards and recognition that raise profile of successful social enterprises.

**International Connections**: Linking Nigerian entrepreneurs with global opportunities and knowledge.

**Conclusion: Redefining Success in Business**

The rise of social entrepreneurship among Nigerian youth represents more than just a business trend—it reflects a fundamental reimagining of the role of business in society. These young entrepreneurs are proving that the most sustainable and scalable solutions to social challenges often come from business models that align profit with purpose.

Their success demonstrates that the next generation of Nigerian leaders refuses to accept the false choice between financial success and social impact. Instead, they're creating enterprises that deliver both, setting new standards for what business can and should achieve.

As these social enterprises continue to grow and replicate their models across Africa and beyond, they offer hope for sustainable development that is locally owned, financially viable, and socially transformative. They represent the future of business—one where success is measured not just in profit, but in positive impact on communities and society.

The lesson for aspiring entrepreneurs, established businesses, and policymakers is clear: sustainable business models that address social challenges are not just possible—they're profitable, scalable, and represent the future of enterprise development.

*To learn more about social entrepreneurship opportunities or to connect with Nigeria's leading social enterprises, visit JCI Nigeria's Social Enterprise Network at www.jcinigeria.org/socialenterprise.*`,
      category: "entrepreneurship",
      author: {
        name: "Folake Oyebode",
        role: "Social Enterprise Development Lead",
        organization: "JCI Nigeria",
        image: "/api/placeholder/100/100",
        bio: "Folake is a social entrepreneur and business development expert with over 10 years of experience in sustainable business models.",
      },
      date: "2024-12-28",
      readTime: "20 min read",
      tags: [
        "Social Entrepreneurship",
        "Sustainable Business",
        "Youth Innovation",
        "Impact Investing",
        "Business Development",
      ],
      views: 3721,
      likes: 298,
      comments: 76,
      shares: 142,
      image: "/api/placeholder/800/500",
      featured: false,
      trending: false,
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredSlides.length]);

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "popular":
          return b.views - a.views;
        case "trending":
          return b.likes + b.shares - (a.likes + a.shares);
        default:
          return 0;
      }
    });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatContent = (content) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
            {paragraph.replace(/\*\*/g, "")}
          </h3>
        );
      }
      if (paragraph.startsWith("- **")) {
        const boldText = paragraph.match(/\*\*(.*?)\*\*/)?.[1] || "";
        const restText = paragraph.replace(/- \*\*(.*?)\*\*: /, "");
        return (
          <li key={index} className="mb-2">
            <span className="font-semibold">{boldText}:</span> {restText}
          </li>
        );
      }
      if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="mb-2">
            {paragraph.substring(2)}
          </li>
        );
      }
      if (paragraph.match(/^\d+\./)) {
        return (
          <li key={index} className="mb-2 list-decimal">
            {paragraph.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      if (paragraph.trim()) {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph.split(/(\*[^*]+\*)/).map((part, i) => {
              if (part.startsWith("*") && part.endsWith("*")) {
                return <em key={i}>{part.slice(1, -1)}</em>;
              }
              return part;
            })}
          </p>
        );
      }
      return <br key={index} />;
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ChevronRight className="h-5 w-5 transform rotate-180 mr-2" />
                Back to Blog
              </button>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {
                  categories.find((cat) => cat.id === selectedPost.category)
                    ?.name
                }
              </span>
              {selectedPost.featured && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
              {selectedPost.trending && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Trending
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(selectedPost.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {selectedPost.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {selectedPost.views.toLocaleString()} views
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                {selectedPost.likes} likes
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                {selectedPost.comments} comments
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
              <div className="flex items-start space-x-4">
                <img
                  src={selectedPost.author.image}
                  alt={selectedPost.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedPost.author.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {selectedPost.author.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {selectedPost.author.organization}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {selectedPost.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 mb-8 font-medium leading-relaxed border-l-4 border-blue-500 pl-6 italic">
              {selectedPost.excerpt}
            </div>

            <div className="text-gray-800 leading-relaxed">
              {formatContent(selectedPost.content)}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Actions */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>{selectedPost.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>{selectedPost.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>{selectedPost.shares}</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Bookmark className="h-4 w-4" />
                Save Article
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(
                  (post) =>
                    post.id !== selectedPost.id &&
                    post.category === selectedPost.category
                )
                .slice(0, 2)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching other pages structure and size */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          {featuredSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue opacity-90"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6">
          {/* Mobile-first alignment - left aligned on mobile, center on desktop */}
          <div className="text-left sm:text-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
              JCI Nigeria Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
              Stories of Leadership, Innovation, and Impact
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
            <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
              Discover inspiring stories, leadership insights, and global perspectives from young changemakers across Africa
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex gap-2 sm:gap-3">
          {featuredSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-jcin-yellow w-6 sm:w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters and Search */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
            <div className="relative mb-4 lg:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 sm:py-3 w-full lg:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-2 sm:px-3 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                  }`}
                >
                  <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Posts Column */}
          <div className="lg:col-span-2">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">
                  No articles found
                </div>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-32 sm:h-40 md:h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-4 sm:p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            {
                              categories.find((cat) => cat.id === post.category)
                                ?.name
                            }
                          </span>
                          {post.featured && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                              Featured
                            </span>
                          )}
                          {post.trending && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                              Trending
                            </span>
                          )}
                        </div>

                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {post.views.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {post.likes}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                          <div className="flex items-center space-x-2">
                            <img
                              src={post.author.image}
                              alt={post.author.name}
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-xs sm:text-sm font-medium text-gray-900">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base">
                            Read More
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Featured Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Featured Posts
              </h3>
              <div className="space-y-4">
                {blogPosts
                  .filter((post) => post.featured)
                  .slice(0, 3)
                  .map((post) => (
                    <div
                      key={post.id}
                      className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                      onClick={() => setSelectedPost(post)}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-blue-600" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
                  .slice(0, 10)
                  .map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
              </div>
            </div>


          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Conversation</h3>
            <p className="text-gray-300 mb-6">
              Share your thoughts, connect with fellow leaders, and contribute
              to the dialogue shaping JCIN UNIBEN future.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Write for Us
              </button>
              <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Contact Editorial Team
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
      />
    </div>
  );
};

export default Blog;
