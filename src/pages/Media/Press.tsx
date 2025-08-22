import { useState } from 'react';
import { Calendar, Clock, User, Search, Download, Share2, Eye, Globe, Award, Users, Target, ChevronDown, FileText } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import lc from "../../assets/Images/Gallery/lc.webp";
import lw1 from "../../assets/Images/Gallery/lw1.jpg";
import ju99 from "../../assets/Images/Gallery/ju99.webp";
import dean from "../../assets/Images/Gallery/dean.webp";
import ebl from "../../assets/Images/Gallery/ebl.webp";
import toyp from "../../assets/Images/Gallery/toyp.webp";
import vis from "../../assets/Images/Gallery/vis.webp";
import health from "../../assets/Images/Gallery/health.webp";
import bus from "../../assets/Images/Gallery/bus.webp";
interface PressRelease {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  tags: string[];
  views: number;
  image: string;
  featured: boolean;
  downloadable: boolean;
}

const Press = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRelease, setSelectedRelease] = useState<PressRelease | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredSlides = [
    { id: 1, title: "JCIN UNIBEN MEETS WITH NEW DEAN OF STUDENTS", image: ju99 },
    { id: 2, title: "JCIN UNIBEN UNVEILED DATE FOR EBL", image: lc },
    { id: 3, title: "JCIN UNIBEN PARTICIPATES IN INTERNATIONAL HUMAN DUTIES DAY", image: lw1 },
  ];

  const categories = [
    { id: 'all', name: 'All Releases', icon: Globe },
    { id: 'leadership', name: 'Leadership', icon: Award },
    { id: 'events', name: 'Events & Programs', icon: Calendar },
    { id: 'community', name: 'Community Impact', icon: Users },
    { id: 'awards', name: 'Awards & Recognition', icon: Target },
    { id: 'partnerships', name: 'Partnerships', icon: Globe }
  ];

  const pressReleases: PressRelease[] = [
    {
      id: 1,
      title: "JCIN UNIBEN MEETS WITH NEW DEAN OF STUDENTS",
      summary: "JCIN UNIBEN's leadership meets with newly appointed Dean of Students to strengthen partnerships for safety, health, and environmental initiatives, while advancing preparations for the upcoming EBL 7.0 Event",
      content: `BENIN CITY, Nigeria – August 7, 2025 – Members of the Junior Chamber International Nigeria (JCIN) UNIBEN Executive Council paid a courtesy and congratulatory visit to the newly appointed Dean of Students at the University of Benin, Professor Fred Osaro Ekhaise. The meeting marked the beginning of a renewed commitment to collaboration on impactful student-focused initiatives.

The JCIN UNIBEN delegation, led by Local Organization President [Insert Name], alongside the Vice President Administration and Local Organization Secretary, extended warm congratulations to the Dean on his recent appointment. In her remarks, the President acknowledged the organization's cordial relationship with the previous Dean and expressed optimism for continued synergy.

"We are excited to work with Professor Ekhaise as we continue our mission to develop young leaders and create positive change in our university community," stated the President. "This partnership will be instrumental in advancing our upcoming EBL 7.0 Event and other transformative initiatives."

The meeting focused on several key areas of collaboration:

Safety and Health Initiatives
The delegation outlined JCIN UNIBEN's commitment to promoting campus safety and student health awareness programs. These initiatives align with the organization's global mission to address critical societal challenges while empowering young people to become active change agents.

Environmental Sustainability Projects
Discussions centered on joint environmental projects that would benefit the university community and surrounding areas. JCIN UNIBEN's environmental focus reflects the organization's dedication to sustainable development and climate action.

EBL 7.0 Event Preparations
A significant portion of the meeting was dedicated to discussing the upcoming EBL 7.0 Event, a flagship program designed to enhance leadership capabilities among university students. The Dean expressed strong support for the initiative and pledged the office's full cooperation in ensuring its success.

Student Development Programs
Both parties explored opportunities for collaborative programs that would enhance student leadership development, entrepreneurship skills, and community engagement. These programs are designed to prepare students for meaningful careers and active citizenship.

Professor Ekhaise welcomed the delegation warmly and expressed his appreciation for JCIN UNIBEN's continued commitment to student development and community service. He emphasized his office's readiness to support initiatives that align with the university's mission of academic excellence and character development.

"The work that JCIN UNIBEN does in developing young leaders is commendable and aligns perfectly with our institutional goals," Professor Ekhaise remarked. "I look forward to a productive partnership that will benefit our entire university community."

The meeting concluded with both parties agreeing to establish regular communication channels and joint planning committees for upcoming initiatives. A follow-up meeting was scheduled to finalize details for the EBL 7.0 Event and other collaborative projects.

About JCIN UNIBEN
Junior Chamber International Nigeria (JCIN) UNIBEN is the local chapter of the global JCI network at the University of Benin. The organization is dedicated to developing leadership skills, promoting entrepreneurship, and creating positive change in the university and broader community through various programs and initiatives.

About EBL 7.0
The Entrepreneurial Business Leadership (EBL) 7.0 Event is JCIN UNIBEN's flagship leadership development program, designed to equip students with essential business and leadership skills needed for success in today's competitive global economy.

For more information about JCIN UNIBEN and upcoming events, please contact:
Email: jcinuniben@gmail.com
Phone: +234 09086138683

Media Contact:
JCIN UNIBEN Communications Team
Email: media@jcinuniben.com
Phone: +234 09086138683`,
      date: "2024-08-07",
      category: "leadership",
      author: "JCIN UNIBEN Communications",
      readTime: "5 min read",
      tags: ["Leadership", "Partnership", "EBL 7.0", "University Relations"],
      views: 250,
      image: dean,
      featured: true,
      downloadable: true
    },
        {
      id: 2,
      title: "JCIN UNIBEN PAYS COURTESY VISIT TO VIISAUS",
      summary: "JCIN UNIBEN secures Viisaus sponsorship for EBL 7.0 during a courtesy visit to Managing Partner Jiro Ejobe, reinforcing a longstanding partnership dedicated to youth empowerment.",
      content: `BENIN CITY, Nigeria – August 8, 2025 – The Executive Council of Junior Chamber International Nigeria (JCIN) UNIBEN, accompanied by the Director of the Emerging Business Leaders (EBL) program, paid a courtesy visit to Mr. Jiro Ejobe, Managing Partner and Founder of Viisaus, in Benin City. The visit further strengthened the longstanding partnership between JCIN UNIBEN and Viisaus, securing vital sponsorship for the upcoming Employability, Business, and Leadership Master Class 7.0 (EBL 7.0).

Led by the Local Organization President, the delegation expressed deep appreciation for Viisaus’ consistent support over the years, acknowledging the positive impact of the company’s contributions on the organization’s growth and project delivery. Special recognition was extended to Madam Stella Obialor, Chief Operations Officer of Viisaus, for her outstanding service and commitment as a valuable resource person for JCIN UNIBEN.

During the meeting, the Director of EBL presented the proposal for EBL 7.0, highlighting its objectives of equipping young people with essential skills in employability, entrepreneurship, and leadership. The proposal received high praise from Mr. Ejobe, who commended JCIN UNIBEN for its vision and professionalism.

In a show of continued commitment, Mr. Ejobe confirmed Viisaus’ sponsorship of EBL 7.0, underscoring the company’s belief in the transformative impact of youth empowerment programs.

“We are truly grateful for Viisaus’ unwavering support and investment in our vision,” said the Local Organization President. “Their partnership continues to fuel our ability to deliver impactful programs that prepare young people for success in leadership, business, and career development.”

The visit concluded with a renewed sense of collaboration and a shared commitment to advancing youth development in Benin City and beyond.`,
      date: "2025-08-08",
      category: "partnerships",
      author: "JCIN UNIBEN Communications",
      readTime: "3 min read",
      tags: ["jcinuniben", "youthempowerment", "ourlegacy", "ascend", "elv8", "jcinigeriacollegiate", "jcinigeria", "jci", "courtesyvisit", "ebl7.0", "viisaus"],
      views: 150,
      image: vis,
      featured: true,
      downloadable: true
    },
            {
      id: 3,
      title: "JCIN UNIBEN PAYS A COURTESY VISIT TO THE HONOURABLE COMMISSIONER FOR HEALTH, EDO STATE",
      summary: "JCIN UNIBEN’s leadership meets with Edo State Commissioner for Health to discuss collaboration on youth empowerment and leadership initiatives, with a focus on the upcoming EBL 7.0 Master Class.",
      content: `BENIN CITY, Nigeria – August 8, 2025 – The Executive Council of Junior Chamber International Nigeria (JCIN) UNIBEN, accompanied by the Director of the Emerging Business Leaders (EBL) program, paid a courtesy visit to the Honourable Commissioner for Health, Edo State, Hon. Dr. Cyril Adams Oshiomole. The engagement strengthened ties between the organization and the Ministry of Health, with a shared commitment to youth empowerment, capacity building, and community development.

The Commissioner warmly received the delegation as the Local Organization President presented JCIN UNIBEN’s mission, values, and impact story, spotlighting the organization’s dedication to leadership development, entrepreneurship, and community service.

A key highlight of the visit was the presentation of the Employability, Business, and Leadership Master Class 7.0 (EBL 7.0), scheduled for later this year. The President emphasized the program’s objectives, which include equipping young people with practical skills, fostering entrepreneurship, and developing leadership capacity to meet the demands of a competitive economy.

The Local Organization Secretary praised the Commissioner for his exemplary leadership and acknowledged the positive transformations his initiatives have brought to the Edo State health sector. The General Legal Counsel further outlined how EBL 7.0 aligns with the Ministry’s health objectives, particularly in the areas of youth development and capacity building for healthcare-related entrepreneurship and leadership.

In his response, the Honourable Commissioner commended JCIN UNIBEN for its consistent contribution to youth and community development. He expressed his full support for the Master Class, noting its potential to nurture a generation of leaders equipped to make significant contributions to the healthcare sector and beyond.

The visit concluded with mutual agreement to explore future collaborations between JCIN UNIBEN and the Ministry of Health, aimed at advancing youth empowerment initiatives and expanding healthcare-focused leadership training in Edo State.`,
      date: "2025-08-08",
      category: "partnerships",
      author: "JCIN UNIBEN Communications",
      readTime: "3 min read",
      tags: ["jcinuniben", "youthempowerment", "ourlegacy", "ascend", "StudentLeadership", "jcinigeriacollegiate", "jcinigeria", "jci", "courtesyvisit", "ebl7.0", "EdoState"],
      views: 150,
      image: health,
      featured: true,
      downloadable: true
    },
     {
      id: 4,
      title: "NOMINATIONS FOR THE UNIBEN TEN OUTSTANDING YOUNG PERSONS AWARD IS OPEN",
      summary: "JCIN UNIBEN opens nominations for the Ten Outstanding Young Persons (TOYP) Award 2025, recognizing exceptional changemakers at the University of Benin who embody excellence, leadership, and impact. Nominations are open until September 15, with the award ceremony set for October 2025.",
      content: `BENIN CITY, Nigeria – August 9, 2025 – JCI UNIBEN has officially opened nominations for the prestigious Ten Outstanding Young Persons (TOYP) Award, an annual recognition program that celebrates the achievements and impact of exceptional young changemakers within the University of Benin community.

The TOYP Award honors ten individuals, aged 18–40, who have demonstrated excellence in various fields including academic leadership, entrepreneurship, cultural achievement, environmental advocacy, personal improvement, and humanitarian service.

“This is more than an award; it’s a platform to spotlight and inspire the next wave of leaders at UNIBEN,” said JCIN UNIBEN Local President [Praise Ewere]. “We want to celebrate those who are not only excelling in their craft but are also driving positive change.”

The award program is guided by three pillars:

Recognition of Impact – Highlighting stories of young people whose achievements have created lasting influence in the university and beyond.

Inspiration Through Legacy – Encouraging others to rise to their full potential by showcasing role models whose journeys embody excellence, service, and leadership.

Sustainable Change – Connecting honorees to mentorship and leadership opportunities within JCI’s global network to scale their positive contributions.

Nomination Details:

Who can nominate? Any student, faculty member, or alumni of UNIBEN.

Who can be nominated? Individuals aged 18–40 who are part of the UNIBEN community and have made significant contributions in one or more categories.

How to nominate? Submit nominations online at https://toyp.jcinuniben.com.

Past TOYP honorees have gone on to represent UNIBEN at national and international platforms, securing partnerships, scholarships, and leadership opportunities.

Nominations close September 15, 2025, with the award ceremony set to take place in October 2025 at the University of Benin Main Auditorium.

“This is the moment to celebrate those who raise the bar with talent and with grace,” added TOYP Director UNIBEN [Deborah Obelawo]. “If it’s YOU or your FRIEND, step into that place!”

For more details, visit https://toyp.jcinuniben.com or contact the JCIN UNIBEN Secretariat.`,
      date: "2025-08-08",
      category: "awards",
      author: "JCIN UNIBEN Communications",
      readTime: "3 min read",
      tags: ["TOYPUNIBEN2025", "JCINUNIBEN", "OutstandingYoungPersons", "StudentImpact", "Leadership", "Excellence" ,"Changemakers", "PositiveChange", "UNIBEN"],
      views: 150,
      image: toyp,
      featured: true,
      downloadable: true
    },

    {
      id: 5,
      title: "Date Unveiled",
      summary: "JCIN UNIBEN announces August 23, 2025, as the date for the EBL 7.0 Grand Finale, a landmark event focused on leadership, business, and personal development.",
      content: `BBENIN CITY, Nigeria – [15-07-07] – Junior Chamber International Nigeria (JCIN) UNIBEN has officially announced the date for the highly anticipated Employability, Business, and Leadership (EBL) Master Class 7.0 Grand Finale, set to take place on Saturday, August 23, 2025 at the University of Benin’s prestigious Akin Deko Auditorium.

The event promises one day, one stage, and unforgettable moments, bringing together students, young professionals, entrepreneurs, and industry leaders for a transformational experience in leadership, business, and personal growth.

Event Details:
📅 Date: Saturday, 23rd August 2025
⏰ Time: 9:00 AM (Red Carpet) | 10:00 AM (Main Event)
🧭 Venue: Akin Deko Auditorium, University of Benin
🔗 Updates: Join the WhatsApp group

“This year’s grand finale is not just an event—it’s the culmination of months of training, mentorship, and collaboration,” said [Insert Name], Local Organization President of JCIN UNIBEN. “We are ready to showcase the next generation of leaders and changemakers.”

The EBL 7.0 Grand Finale will feature keynote speeches, panel discussions, award presentations, and networking opportunities, reinforcing JCIN UNIBEN’s mission to equip young people with the skills to thrive in a dynamic world.`,
      date: "2025-08-08",
      category: "Events & Programs",
      author: "JCIN UNIBEN Communications",
      readTime: "2 min read",
      tags: ["ebl7", "ourlegacy", "ascend", "elv8", "jcinuniben", "jcinigeriacollegiate", "jcinigeria", "jci", "leadership", "business"],
      views: 150,
      image: ebl,
      featured: true,
      downloadable: true
    },
        {
      id: 6,
      title: "Support the JCIN UNIBEN Bus Project with Just ₦1,000!",
      summary: "Fundraising drive inviting members, alumni, and supporters to contribute ₦1,000 or more towards the purchase of a bus for jcinuniben, aimed at boosting mobility and enhancing project delivery.",
      content: `
Do you know that you can help jcinuniben buy a bus with just ₦1,000?

Yes — your kind support will go a long way in helping us achieve this dream. 🙏

Together, we can make something beautiful happen.

📌 Please send your donation to:
🏧 Account Number: 6230221708
🏦 Bank: Fidelity Bank
💳 Account Name: Junior Chamber International
📝 Narration: JCIN UNIBEN Bus Project

💙 Thank you so much for believing in us!
One Goal! One Bus! One Big Impact!`,
      date: "2025-08-02",
      category: "Community Impact",
      author: "JCIN UNIBEN Communications",
      readTime: "2 min read",
      tags: ["jcinunibenbusproject", "ourlegacy", "ascend", "elv8", "jcinigeriacollegiate", "jcinigeria", "jci",],
      views: 50,
      image: bus,
      featured: true,
      downloadable: true
    },
  ];

  // Filter press releases based on category and search term
  const filteredReleases = pressReleases.filter(release => {
    const matchesCategory = activeCategory === 'all' || release.category.toLowerCase() === activeCategory;
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort press releases
  const sortedReleases = [...filteredReleases].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'most-viewed') {
      return b.views - a.views;
    }
    return 0;
  });

  const handleReleaseClick = (release: PressRelease) => {
    setSelectedRelease(release);
  };

  const closeModal = () => {
    setSelectedRelease(null);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section - Matching Contact page structure and size */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          {featuredSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover object-top"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue opacity-90"></div> */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6">
          {/* Mobile-first alignment - left aligned on mobile, center on desktop */}
          <div className="text-left sm:text-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
              Press Releases
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
              Stay Updated With Latest News
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
            <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
              Stay updated with the latest news, announcements, and developments from JCI Nigeria
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex gap-2 sm:gap-3">
          {featuredSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-jcin-yellow w-6 sm:w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search press releases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-jcin-light-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="most-viewed">Most Viewed</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Press Releases Grid */}
       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
  {sortedReleases.map((release) => (
    <div
      key={release.id}
      onClick={() => handleReleaseClick(release)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden"
    >
      {/* Image Section */}
     <div className="relative h-48 sm:h-56 overflow-hidden">
  {/* Display the release image */}
  {<img
    src={release.image}
    alt={release.title}
    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
  /> }

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white text-sm mb-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(release.date).toLocaleDateString()}</span>
            <Clock className="w-4 h-4 ml-2" />
            <span>{release.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-jcin-yellow/20 text-jcin-dark-blue text-xs font-medium rounded-full">
            {release.category.charAt(0).toUpperCase() + release.category.slice(1)}
          </span>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Eye className="w-4 h-4" />
            <span>{release.views}</span>
          </div>
        </div>
      

                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-jcin-light-blue transition-colors line-clamp-2">
                  {release.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {release.summary}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {release.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                  {release.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{release.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <User className="w-4 h-4" />
                    <span>{release.author}</span>
                  </div>
                  {release.downloadable && (
                    <button className="p-2 text-jcin-light-blue hover:bg-jcin-light-blue/10 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {sortedReleases.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No press releases found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Modal for Press Release Details */}
      {selectedRelease && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pr-4">
                {selectedRelease.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedRelease.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedRelease.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedRelease.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedRelease.views} views</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedRelease.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-jcin-yellow/20 text-jcin-dark-blue text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {selectedRelease.content}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-jcin-light-blue text-white rounded-lg hover:bg-jcin-dark-blue transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                {selectedRelease.downloadable && (
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Press;