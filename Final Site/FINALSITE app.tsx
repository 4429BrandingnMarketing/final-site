// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [activeTab, setActiveTab] = useState<string>('home');
const [showSettings, setShowSettings] = useState<boolean>(false);
React.useEffect(() => {
const style = document.createElement('style');
style.textContent = `
@keyframes buttonPress {
from {
transform: scale(0.95);
opacity: 0.8;
}
to {
transform: scale(1);
opacity: 1;
}
}
.animate-button-press {
animation: buttonPress 0.2s ease-out;
}
`;
document.head.appendChild(style);
return () => {
document.head.removeChild(style);
};
}, []);
const [isAdmin, setIsAdmin] = useState<boolean>(true); // For demo purposes
const [currentTheme, setCurrentTheme] = useState<'dark' | 'light' | 'system'>('dark');
const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
const [pushNotifications, setPushNotifications] = useState<boolean>(true);
React.useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
const profileMenu = document.getElementById('profile-menu');
const profileAvatar = document.getElementById('profile-avatar');
if (profileMenu && !profileMenu.classList.contains('hidden') &&
profileAvatar && !profileAvatar.contains(event.target as Node) &&
!profileMenu.contains(event.target as Node)) {
profileMenu.classList.add('hidden');
}
};
document.addEventListener('click', handleClickOutside);
return () => {
document.removeEventListener('click', handleClickOutside);
};
}, []);
const currentDate = "April 21, 2025";
const handleThemeChange = (theme: 'dark' | 'light' | 'system') => {
setCurrentTheme(theme);
const darkButton = document.getElementById('settings-theme-dark');
const lightButton = document.getElementById('settings-theme-light');
const systemButton = document.getElementById('settings-theme-system');
if (darkButton && lightButton && systemButton) {
darkButton.className = `bg-gray-800 border ${theme === 'dark' ? 'border-red-500 border-2' : 'border-gray-700'} rounded-lg p-4 text-center`;
lightButton.className = `bg-gray-800 border ${theme === 'light' ? 'border-red-500 border-2' : 'border-gray-700'} rounded-lg p-4 text-center`;
systemButton.className = `bg-gray-800 border ${theme === 'system' ? 'border-red-500 border-2' : 'border-gray-700'} rounded-lg p-4 text-center`;
}
document.documentElement.className = theme;
};
return (
<div className={`min-h-screen font-sans ${currentTheme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}>
{/* Header */}
<header className="bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center space-x-2">
<a href="https://redvisioncreativestudio.com" data-readdy="true" className="flex items-center">
<img
src="https://static.readdy.ai/image/f252f287c12ef86edf0b7ee58f3c98ca/b1f680fda55d89efcca77ed2a4001a7a.jpeg"
alt="Red Vision Creative Studio"
className="h-12 w-auto"
/>
</a>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a
href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/831ce589-0999-44cc-8460-afc8c51f5fbf"
data-readdy="true"
className={`py-2 px-3 text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer !rounded-button ${activeTab === 'home' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
onClick={(e) => {
setActiveTab('home');
if (activeTab === 'home') {
const button = e.currentTarget;
button.classList.add('animate-button-press');
setTimeout(() => {
button.classList.remove('animate-button-press');
}, 200);
}
}}
>
Home
</a>
{isAdmin && (
<a
href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/d06e1f59-ccaa-47ee-8f7f-2ef8d7a574b0"
data-readdy="true"
className={`py-2 px-3 text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer !rounded-button ${activeTab === 'admin' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
>
Red Vision TV AI Tools
</a>
)}
<div className="relative">
<button
id="ai-record-tab"
onClick={() => {
setActiveTab('ai-record');
window.scrollTo({ top: 0, behavior: 'smooth' });
const menu = document.getElementById('ai-record-menu');
if (menu) {
menu.classList.add('hidden');
}
}}
className={`py-2 px-3 text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer !rounded-button ${activeTab === 'ai-record' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
>
<a href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/5805ed0d-1818-4802-b37b-cceda994b3e6" data-readdy="true" className="flex items-center">
Red Vision Music
{activeTab === 'ai-record' && <i className="fas fa-chevron-down ml-2 text-xs"></i>}
</a>
</button>
{activeTab === 'ai-record' && (
<div
id="ai-record-menu"
className="hidden absolute top-full left-0 mt-1 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50"
>
<div className="py-2">
<a
href="#artist-roster"
className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
onClick={(e) => {
e.preventDefault();
const menu = document.getElementById('ai-record-menu');
if (menu) menu.classList.add('hidden');
const section = document.querySelector('#artist-roster');
if (section) section.scrollIntoView({ behavior: 'smooth' });
}}
>
Artist Roster
</a>
<a
href="#trending-tracks"
className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
onClick={(e) => {
e.preventDefault();
const menu = document.getElementById('ai-record-menu');
if (menu) menu.classList.add('hidden');
const section = document.querySelector('#trending-tracks');
if (section) section.scrollIntoView({ behavior: 'smooth' });
}}
>
Trending Tracks
</a>
<a
href="#analytics"
className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
onClick={(e) => {
e.preventDefault();
const menu = document.getElementById('ai-record-menu');
if (menu) menu.classList.add('hidden');
const section = document.querySelector('#analytics');
if (section) section.scrollIntoView({ behavior: 'smooth' });
}}
>
Analytics
</a>
<a
href="#upcoming-releases"
className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
onClick={(e) => {
e.preventDefault();
const menu = document.getElementById('ai-record-menu');
if (menu) menu.classList.add('hidden');
const section = document.querySelector('#upcoming-releases');
if (section) section.scrollIntoView({ behavior: 'smooth' });
}}
>
Upcoming Releases
</a>
</div>
</div>
)}
</div>
<a
href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/7e8fdcb2-034f-4699-9c94-4feaf2ee7ab5"
data-readdy="true"
className={`py-2 px-3 text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer !rounded-button ${activeTab === 'branding' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
>
#4429 Lifestyle & Branding
</a>
<a
href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/dcf2a11c-53c1-4a41-9af5-e00c2cfa4737"
data-readdy="true"
className={`py-2 px-3 text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer !rounded-button ${activeTab === 'merch' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
>
GiFTD N' PrVLGD Co.
</a>
<a
href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/ecb64585-5b70-4905-a99d-5a782e44157d"
data-readdy="true"
className={`py-2 px-3 text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer !rounded-button ${activeTab === 'personal' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`}
>
Your AI Employees
</a>
</nav>
<div className="flex items-center space-x-4">
<button className="text-gray-400 hover:text-white cursor-pointer">
<i className="fas fa-bell text-lg"></i>
</button>
<button
id="settings-button"
onClick={() => setShowSettings(true)}
className="text-gray-400 hover:text-white cursor-pointer">
<i className="fas fa-cog text-lg"></i>
</button>
{showSettings && (
<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
<div className="bg-gray-900 rounded-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
<div className="flex justify-between items-center p-6 border-b border-gray-800">
<h2 className="text-xl font-bold">Settings</h2>
<button
id="settings-close"
onClick={() => setShowSettings(false)}
className="text-gray-400 hover:text-white">
<i className="fas fa-times"></i>
</button>
</div>
<div className="p-6 space-y-8">
{/* Account Settings */}
<div>
<h3 className="text-lg font-semibold mb-4">Account Settings</h3>
<div className="space-y-4">
<div>
<label className="block text-sm text-gray-400 mb-2">Email Address</label>
<input
id="settings-email"
type="email"
className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 text-sm"
defaultValue="john@example.com"
/>
</div>
<div>
<label className="block text-sm text-gray-400 mb-2">Language</label>
<div className="relative">
<select
id="settings-language"
className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 text-sm appearance-none">
<option>English</option>
<option>Spanish</option>
<option>French</option>
</select>
<i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>
</div>
</div>
{/* Notification Preferences */}
<div>
<h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm">Email Notifications</span>
<div
id="settings-email-toggle"
onClick={() => setEmailNotifications(!emailNotifications)}
className={`w-12 h-6 ${emailNotifications ? 'bg-red-500' : 'bg-gray-700'} rounded-full relative cursor-pointer transition-colors duration-200`}>
<div className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-all duration-200 ${emailNotifications ? 'right-1' : 'left-1'}`}></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Push Notifications</span>
<div
id="settings-push-toggle"
onClick={() => setPushNotifications(!pushNotifications)}
className={`w-12 h-6 ${pushNotifications ? 'bg-red-500' : 'bg-gray-700'} rounded-full relative cursor-pointer transition-colors duration-200`}>
<div className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-all duration-200 ${pushNotifications ? 'right-1' : 'left-1'}`}></div>
</div>
</div>
</div>
</div>
{/* Appearance */}
<div>
<h3 className="text-lg font-semibold mb-4">Appearance</h3>
<div className="space-y-4">
<div>
<label className="block text-sm text-gray-400 mb-2">Theme</label>
<div className="grid grid-cols-3 gap-3">
<button
id="settings-theme-dark"
onClick={() => handleThemeChange('dark')}
className={`bg-gray-800 border ${currentTheme === 'dark' ? 'border-red-500 border-2' : 'border-gray-700'} rounded-lg p-4 text-center`}>
<i className="fas fa-moon mb-2"></i>
<p className="text-sm">Dark</p>
</button>
<button
id="settings-theme-light"
onClick={() => handleThemeChange('light')}
className={`bg-gray-800 border ${currentTheme === 'light' ? 'border-red-500 border-2' : 'border-gray-700'} rounded-lg p-4 text-center`}>
<i className="fas fa-sun mb-2"></i>
<p className="text-sm">Light</p>
</button>
<button
id="settings-theme-system"
onClick={() => handleThemeChange('system')}
className={`bg-gray-800 border ${currentTheme === 'system' ? 'border-red-500 border-2' : 'border-gray-700'} rounded-lg p-4 text-center`}>
<i className="fas fa-laptop mb-2"></i>
<p className="text-sm">System</p>
</button>
</div>
</div>
</div>
</div>
{/* Privacy Settings */}
<div>
<h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm">Profile Visibility</span>
<div className="relative">
<select
id="settings-privacy"
className="bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 text-sm appearance-none">
<option>Public</option>
<option>Private</option>
<option>Friends Only</option>
</select>
<i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>
</div>
</div>
{/* Integration Settings */}
<div>
<h3 className="text-lg font-semibold mb-4">Integrations</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
<div className="flex items-center">
<i className="fab fa-spotify text-2xl text-green-500 mr-3"></i>
<div>
<p className="font-medium">Spotify</p>
<p className="text-sm text-gray-400">Connected</p>
</div>
</div>
<button
id="settings-spotify"
className="text-sm text-red-500 hover:text-red-400">Disconnect</button>
</div>
<div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
<div className="flex items-center">
<i className="fab fa-youtube text-2xl text-red-500 mr-3"></i>
<div>
<p className="font-medium">YouTube</p>
<p className="text-sm text-gray-400">Not connected</p>
</div>
</div>
<button
id="settings-youtube"
className="text-sm text-green-500 hover:text-green-400">Connect</button>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 p-6 flex justify-end space-x-4">
<button
id="settings-cancel"
onClick={() => setShowSettings(false)}
className="px-4 py-2 text-sm text-gray-400 hover:text-white">
Cancel
</button>
<button
id="settings-save"
className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 rounded-lg !rounded-button whitespace-nowrap">
Save Changes
</button>
</div>
</div>
</div>
)}
<div className="relative">
<div
id="profile-avatar"
className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center cursor-pointer"
onClick={(e) => {
e.stopPropagation();
const menu = document.getElementById('profile-menu');
if (menu) {
const allMenus = document.querySelectorAll('[id^="track-menu-"]');
allMenus.forEach(m => m.classList.add('hidden'));
menu.classList.toggle('hidden');
}
}}
>
<span className="text-xs font-bold">JS</span>
</div>
<div
id="profile-menu"
className="hidden absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-lg z-50"
>
<div className="py-2">
<a href="#profile" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fas fa-user mr-2"></i>My Profile
</a>
<a href="#settings" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fas fa-cog mr-2"></i>Account Settings
</a>
<a href="#music" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fas fa-music mr-2"></i>My Music
</a>
<div className="border-t border-gray-800 my-1"></div>
<a href="#logout" className="block px-4 py-2 text-sm text-red-500 hover:text-red-400 hover:bg-gray-800 transition-colors duration-200">
<i className="fas fa-sign-out-alt mr-2"></i>Logout
</a>
</div>
</div>
</div>
</div>
</div>
</header>
{/* Main Content */}
<main className="pt-20 pb-24">
{activeTab === 'home' && <HomePage />}
{activeTab === 'ai-record' && <AIRecordLabel />}
{activeTab === 'branding' && <BrandingAgency />}
{activeTab === 'merch' && <MerchStore />}
{activeTab === 'personal' && <PersonalDashboard />}
{activeTab === 'admin' && <AdminPanel />}
</main>
{/* AI Assistant Interface */}
<div className="fixed bottom-0 w-full bg-black bg-opacity-80 backdrop-blur-md border-t border-gray-800 py-3 px-6">
<div className="container mx-auto flex items-center">
<div className="w-full max-w-4xl mx-auto flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
<i className="fas fa-robot text-white"></i>
</div>
<div className="flex-1 relative">
<input
type="text"
placeholder="Ask Visionary anything..."
className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
/>
<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 cursor-pointer">
<i className="fas fa-microphone"></i>
</button>
</div>
<button className="bg-gradient-to-r from-red-500 to-purple-600 rounded-full p-2 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-paper-plane"></i>
</button>
</div>
</div>
</div>
</div>
);
};
const HomePage: React.FC = () => {
return (
<div className="container mx-auto px-6">
{/* Hero Section */}
<div className="relative h-[600px] rounded-xl overflow-hidden mb-16">
<div className="absolute inset-0">
<video
autoPlay
muted
loop
playsInline
className="w-full h-full object-cover"
>
<source src="https://public.readdy.ai/ai/video_res/0e7e4966-f2f2-4927-b605-cff8b7007be1.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex items-center">
<div className="max-w-2xl px-8">
<h1 className="text-5xl font-bold mb-6 leading-tight">
The Blueprint Of How The Music Industry Needs To Be Operated
</h1>
<p className="text-xl text-gray-300 mb-8">
Experience the future of music creation with our cutting-edge AI technology, marketing and professional studio resources.
</p>
<div className="flex space-x-4">
<a href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/896fe506-57ae-483c-b5d5-a570e553af98" data-readdy="true" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 cursor-pointer !rounded-button whitespace-nowrap">
<span>Get Started</span>
<i className="fas fa-arrow-right"></i>
</a>
<button
id="watch-demo-button"
onClick={() => {
const modal = document.getElementById('demo-video-modal');
if (modal) modal.classList.remove('hidden');
}}
className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-play"></i>
<span>Watch Demo</span>
</button>
</div>
</div>
</div>
</div>
{/* Video Modal */}
<div id="demo-video-modal" className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 hidden">
<div className="bg-gray-900 rounded-xl w-full max-w-4xl">
<div className="flex justify-between items-center p-6 border-b border-gray-800">
<h2 className="text-xl font-bold">Red Vision Studio Demo</h2>
<button
id="close-demo-modal"
onClick={() => {
const modal = document.getElementById('demo-video-modal');
const iframe = document.getElementById('demo-video') as HTMLIFrameElement;
if (modal) modal.classList.add('hidden');
if (iframe) iframe.src = iframe.src; // Reset video
}}
className="text-gray-400 hover:text-white">
<i className="fas fa-times"></i>
</button>
</div>
<div className="p-6">
<div id="video-container" className="w-full h-[500px] bg-black rounded-lg overflow-hidden mb-4">
<iframe
id="demo-video"
className="w-full h-full"
src="https://www.youtube.com/embed/YpdAMwl8Kls"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>
</div>
<p className="text-gray-400 text-sm">
Experience the future of music production with Red Vision Studio. Our platform combines cutting-edge AI technology with professional studio resources to help artists create, produce, and distribute their music globally.
</p>
</div>
</div>
</div>
{/* Features Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<a href="https://redvisionmusic.com" data-readdy="true" className="block">
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-200">
<div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
<i className="fas fa-music text-red-500 text-xl"></i>
</div>
<h3 className="text-xl font-bold mb-3">Full Service Record Label and Distribution</h3>
<p className="text-gray-400">
We provide  professional-quality tracks with our grammy award winning sound and a virtual studio environment that will mix and master the final product.
</p>
</div>
</a>
<a href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/9e69d136-1460-44b8-8895-c568e47b45fa" data-readdy="true" className="block">
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-200">
<div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
<i className="fas fa-chart-line text-purple-500 text-xl"></i>
</div>
<h3 className="text-xl font-bold mb-3">Website Design with Analytics, Insights & SEO</h3>
<p className="text-gray-400">
Track your music performance with advanced analytics and get AI-powered recommendations for growth.
</p>
</div>
</a>
<a href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/6f613ef4-2433-401a-acc0-dc4d4f82d0ea" data-readdy="true" className="block">
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-200">
<div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
<i className="fas fa-globe text-blue-500 text-xl"></i>
</div>
<h3 className="text-xl font-bold mb-3">Video Content Creator and Editor</h3>
<p className="text-gray-400">
Distribute your music worldwide and reach new audiences with our integrated distribution network.
</p>
</div>
</a>
</div>
{/* About Us Section */}
<div className="mb-16">
<div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8">
<h2 className="text-3xl font-bold mb-6">About Red Vision Creative Studio</h2>
<p className="text-gray-300 mb-6">
Red Vision Creative Studio is a pioneering force in the music industry, combining cutting-edge AI technology with traditional music production expertise. Founded with the vision of revolutionizing how music is created, produced, and distributed, we offer a comprehensive suite of services for artists at every stage of their journey.
</p>
<div className="space-y-4 mb-8">
<div className="flex items-start">
<i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
<p className="text-gray-300">State-of-the-art AI-powered music production tools and virtual studio environment</p>
</div>
<div className="flex items-start">
<i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
<p className="text-gray-300">Professional mixing and mastering services with Grammy award-winning sound</p>
</div>
<div className="flex items-start">
<i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
<p className="text-gray-300">Comprehensive marketing and branding solutions for artists</p>
</div>
<div className="flex items-start">
<i className="fas fa-check-circle text-red-500 mt-1 mr-3"></i>
<p className="text-gray-300">Global music distribution and promotion network</p>
</div>
</div>
<a href="https://www.youtube.com/@RedVisionMusic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full transition-colors duration-200 !rounded-button whitespace-nowrap">
<span>Learn More About Us</span>
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
<div className="relative">
<img
src="https://static.readdy.ai/image/f252f287c12ef86edf0b7ee58f3c98ca/1beba89e813076e0e4459b9d1bcbceda.jpeg"
alt="Red Vision Studio"
className="w-full h-full object-cover"
/>
<a href="https://" data-readdy="true" className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></a>
<div className="absolute bottom-8 left-8 right-8">
<div className="grid grid-cols-3 gap-4">
<div className="text-center">
<div className="text-2xl font-bold mb-1">500+</div>
<div className="text-sm text-gray-400">Artists Served</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold mb-1">50M+</div>
<div className="text-sm text-gray-400">Streams Generated</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold mb-1">15+</div>
<div className="text-sm text-gray-400">Grammy Winners</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Success Stories */}
<div className="mb-16">
<h2 className="text-2xl font-bold mb-8">Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-start space-x-4">
<img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20musician%20in%20studio%20environment%2C%20natural%20lighting%2C%20modern%20aesthetic&width=100&height=100&seq=30&orientation=squarish"
alt="Artist"
className="w-16 h-16 rounded-full object-cover"
/>
<div>
<h3 className="font-bold mb-2">Sarah Chen</h3>
<p className="text-gray-400 mb-4">
"Red Vision Studio has completely transformed my music production workflow. The AI tools are incredible, and the team's support is outstanding."
</p>
<div className="flex items-center space-x-1 text-yellow-500">
{[1, 2, 3, 4, 5].map((star) => (
<i key={star} className="fas fa-star text-sm"></i>
))}
</div>
</div>
</div>
</div>
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-start space-x-4">
<img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20music%20producer%20in%20modern%20studio%2C%20creative%20lighting%2C%20contemporary%20style&width=100&height=100&seq=31&orientation=squarish"
alt="Artist"
className="w-16 h-16 rounded-full object-cover"
/>
<div>
<h3 className="font-bold mb-2">Marcus Thompson</h3>
<p className="text-gray-400 mb-4">
"The analytics and insights have helped me grow my audience exponentially. I couldn't imagine working without Red Vision Studio now."
</p>
<div className="flex items-center space-x-1 text-yellow-500">
{[1, 2, 3, 4, 5].map((star) => (
<i key={star} className="fas fa-star text-sm"></i>
))}
</div>
</div>
</div>
</div>
</div>
</div>
{/* Biz In A Box Section */}
<div className="mb-16">
<h2 className="text-2xl font-bold mb-8">Our Founder</h2>
<div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
<div className="flex flex-col md:flex-row">
<div className="md:w-1/2 p-8">
<h2 className="text-3xl font-bold mb-6">About Jason Salvador</h2>
<p className="text-gray-300 mb-6">
Jason Salvador is a native of Los Angeles who quickly rose from intern to executive at the age of 18, working for Will Smith's Overbrook Entertainment as a talent manager. Known for his unique approach to discovering and managing top producers and songwriters in the music industry, he has worked with multiple Grammy Award winners.
</p>
<p className="text-gray-300 mb-6">
Venturing out on his own, Jason partnered with industry giants and has toured with renowned artists. His experience spans across working with major talents in the music industry, from Kanye West to Pharrell Williams.
</p>
<div className="mb-6">
<h3 className="text-xl font-bold mb-4">Recent Achievements</h3>
<ul className="space-y-3">
<li className="flex items-center text-gray-300">
<i className="fas fa-check-circle text-red-500 mr-3"></i>
Founded the world's first fully AI-powered independent record label
</li>
<li className="flex items-center text-gray-300">
<i className="fas fa-check-circle text-red-500 mr-3"></i>
Created an AI agent employee-based marketing agency
</li>
<li className="flex items-center text-gray-300">
<i className="fas fa-check-circle text-red-500 mr-3"></i>
Established Red Vision Creative Studio for lifestyle and marketing
</li>
</ul>
</div>
<a href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/896fe506-57ae-483c-b5d5-a570e553af98" data-readdy="true" className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full transition-colors duration-200 !rounded-button whitespace-nowrap">
<span>Follow Our Journey</span>
<i className="fas fa-arrow-right"></i>
</a>
</div>
<div className="md:w-1/2 relative">
<img
src="https://static.readdy.ai/image/f252f287c12ef86edf0b7ee58f3c98ca/f550b95763605b4492c77daad386ec85.jpeg"
alt="Jason Salvador"
className="w-full h-full object-cover"
/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-6">
<div className="flex items-center space-x-4">
<div className="flex-1">
<h4 className="font-bold text-xl">Jason Salvador</h4>
<p className="text-gray-400">Founder & CEO</p>
</div>
<div className="flex items-center space-x-4">
<a href="https://twitter.com/redvisionmusic_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
<i className="fab fa-twitter text-xl"></i>
</a>
<a href="https://www.facebook.com/RedVisionMusicMarketing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
<i className="fab fa-facebook text-xl"></i>
</a>
<a href="https://www.linkedin.com/in/jason-salvador/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
<i className="fab fa-linkedin text-xl"></i>
</a>
<a href="https://www.instagram.com/redvisiontv" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
<i className="fab fa-instagram text-xl"></i>
</a>
<a href="https://www.youtube.com/channel/UCA9HNdb7lT1AuY1g0WGOWCA" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
<i className="fab fa-youtube text-xl"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* CTA Section */}
<div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
<div className="absolute inset-0">
<img
src="https://readdy.ai/api/search-image?query=futuristic%20music%20production%20environment%20with%20holographic%20interfaces%2C%20ambient%20lighting%2C%20high-tech%20equipment%2C%20minimalist%20design%20with%20red%20and%20purple%20accent%20lighting&width=1440&height=400&seq=40&orientation=landscape"
alt="CTA Background"
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex items-center">
<div className="max-w-2xl px-8">
<h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vision?</h2>
<p className="text-xl text-gray-300 mb-6">
Join Red Vision Creative Studio today and experience the power of AI.
</p>
<a
href="https://readdy.ai/home/f531dfe4-2418-47e1-a733-f461d453411c/896fe506-57ae-483c-b5d5-a570e553af98"
data-readdy="true"
className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 cursor-pointer !rounded-button whitespace-nowrap inline-flex">
<span>Sign Up for Red Vision</span>
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
{/* Contact Section */}
<div className="bg-black rounded-xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-12">
<h2 className="text-red-500 text-4xl font-bold mb-6">TALK TO US</h2>
<div className="space-y-4">
<div>
<h3 className="text-2xl font-bold mb-2">Jason Salvador</h3>
<p className="text-gray-400">[chief operator]</p>
</div>
<div>
<p className="text-xl">+1-747-254-5756</p>
<p className="text-xl italic">info@4429brandmarketing.com</p>
</div>
</div>
</div>
<div className="relative h-[400px]">
<img
src="https://static.readdy.ai/image/f252f287c12ef86edf0b7ee58f3c98ca/40af10890663406d4c3cfcfa57c9d63a.png"
alt="Contact"
className="w-full h-full object-cover"
/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
<div className="flex items-center justify-center space-x-6">
<a href="https://twitter.com/redvisionmusic_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
<i className="fab fa-twitter text-2xl"></i>
</a>
<a href="https://www.facebook.com/RedVisionMusicMarketing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">
<i className="fab fa-facebook text-2xl"></i>
</a>
<a href="https://www.linkedin.com/in/jason-salvador/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
<i className="fab fa-linkedin text-2xl"></i>
</a>
<a href="https://www.instagram.com/redvisiontv" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors duration-200">
<i className="fab fa-instagram text-2xl"></i>
</a>
<a href="https://www.youtube.com/channel/UCA9HNdb7lT1AuY1g0WGOWCA" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors duration-200">
<i className="fab fa-youtube text-2xl"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
);
};
const AIRecordLabel: React.FC = () => {
const [selectedArtist, setSelectedArtist] = useState<number | null>(null);
const artists = [
{
id: 1,
name: "Nova Beats",
genre: "Electronic",
streams: "1.2M",
growth: "+15%",
nextRelease: "May 5, 2025",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20electronic%20music%20producer%20with%20headphones%20in%20a%20modern%20studio%20with%20neon%20lights%20and%20music%20equipment%2C%20minimalist%20background%2C%20high%20quality%20studio%20photography&width=100&height=100&seq=1&orientation=squarish"
},
{
id: 2,
name: "Lunar Echo",
genre: "Indie Pop",
streams: "850K",
growth: "+23%",
nextRelease: "June 12, 2025",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20an%20indie%20pop%20musician%20with%20vintage%20aesthetic%2C%20soft%20lighting%2C%20minimalist%20studio%20background%2C%20high%20quality%20professional%20photography&width=100&height=100&seq=2&orientation=squarish"
},
{
id: 3,
name: "Rhythm Collective",
genre: "Hip Hop",
streams: "2.4M",
growth: "+8%",
nextRelease: "April 30, 2025",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20hip%20hop%20artist%20group%20with%20urban%20style%2C%20studio%20lighting%2C%20minimalist%20background%2C%20professional%20music%20industry%20photography&width=100&height=100&seq=3&orientation=squarish"
},
{
id: 4,
name: "Ethereal Waves",
genre: "Ambient",
streams: "620K",
growth: "+12%",
nextRelease: "July 3, 2025",
image: "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20ambient%20music%20artist%20with%20ethereal%20lighting%2C%20minimalist%20studio%20setting%2C%20atmospheric%20mood%2C%20high%20quality%20professional%20photography&width=100&height=100&seq=4&orientation=squarish"
}
];
const trendingTracks = [
{ id: 1, title: "Neon Dreams", artist: "Nova Beats", streams: "450K", trend: "+18%" },
{ id: 2, title: "Midnight Echoes", artist: "Lunar Echo", streams: "320K", trend: "+25%" },
{ id: 3, title: "Urban Flow", artist: "Rhythm Collective", streams: "780K", trend: "+10%" },
{ id: 4, title: "Celestial Path", artist: "Ethereal Waves", streams: "280K", trend: "+15%" }
];
return (
<div className="container mx-auto px-6">
{/* Artist Roster Section */}
<section id="artist-roster" className="mb-16">
<h2 className="text-2xl font-bold mb-8">Artist Roster</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{artists.map((artist) => (
<div
key={artist.id}
onClick={() => setSelectedArtist(artist.id)}
className={`bg-gray-800 bg-opacity-50 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
selectedArtist === artist.id ? 'ring-2 ring-red-500' : 'hover:bg-opacity-70'
}`}
>
<div className="flex items-center space-x-4 mb-4">
<img
src={artist.image}
alt={artist.name}
className="w-16 h-16 rounded-full object-cover"
/>
<div>
<h3 className="font-bold">{artist.name}</h3>
<p className="text-sm text-gray-400">{artist.genre}</p>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm">
<span className="text-gray-400">Monthly Streams</span>
<span>{artist.streams}</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-400">Growth</span>
<span className="text-green-500">{artist.growth}</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-400">Next Release</span>
<span>{artist.nextRelease}</span>
</div>
</div>
</div>
))}
</div>
</section>
{/* Trending Tracks Section */}
<section id="trending-tracks" className="mb-16">
<h2 className="text-2xl font-bold mb-8">Trending Tracks</h2>
<div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
<table className="w-full">
<thead>
<tr className="border-b border-gray-700">
<th className="text-left py-4 px-6 font-medium text-gray-400">#</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Title</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Artist</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Streams</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Trend</th>
<th className="text-left py-4 px-6 font-medium text-gray-400"></th>
</tr>
</thead>
<tbody>
{trendingTracks.map((track, index) => (
<tr key={track.id} className="border-b border-gray-700 last:border-0">
<td className="py-4 px-6">{index + 1}</td>
<td className="py-4 px-6">{track.title}</td>
<td className="py-4 px-6">{track.artist}</td>
<td className="py-4 px-6">{track.streams}</td>
<td className="py-4 px-6 text-green-500">{track.trend}</td>
<td className="py-4 px-6 relative">
<button
id={`track-menu-button-${track.id}`}
className="text-gray-400 hover:text-white"
onClick={(e) => {
e.stopPropagation();
const menu = document.getElementById(`track-menu-${track.id}`);
const allMenus = document.querySelectorAll('[id^="track-menu-"]');
allMenus.forEach(m => {
if (m.id !== `track-menu-${track.id}`) {
m.classList.add('hidden');
}
});
menu?.classList.toggle('hidden');
}}>
<i className="fas fa-ellipsis-h"></i>
</button>
<div
id={`track-menu-${track.id}`}
className="hidden absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-lg z-50">
<div className="py-2">
<a
href="https://www.youtube.com/@RedVisionMusic"
target="_blank"
rel="noopener noreferrer"
className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fab fa-youtube mr-2"></i>View on YouTube
</a>
<button
className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fas fa-share mr-2"></i>Share
</button>
</div>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
</section>
{/* Analytics Section */}
<section id="analytics" className="mb-16">
<h2 className="text-2xl font-bold mb-8">Analytics Overview</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
<i className="fas fa-headphones text-blue-500"></i>
</div>
<span className="text-green-500">+12.5%</span>
</div>
<h3 className="text-2xl font-bold mb-1">4.8M</h3>
<p className="text-gray-400">Total Streams</p>
</div>
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center">
<i className="fas fa-users text-purple-500"></i>
</div>
<span className="text-green-500">+8.3%</span>
</div>
<h3 className="text-2xl font-bold mb-1">245K</h3>
<p className="text-gray-400">Monthly Listeners</p>
</div>
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
<i className="fas fa-heart text-red-500"></i>
</div>
<span className="text-green-500">+15.7%</span>
</div>
<h3 className="text-2xl font-bold mb-1">89K</h3>
<p className="text-gray-400">Track Saves</p>
</div>
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
<i className="fas fa-dollar-sign text-green-500"></i>
</div>
<span className="text-green-500">+20.1%</span>
</div>
<h3 className="text-2xl font-bold mb-1">$42.5K</h3>
<p className="text-gray-400">Revenue</p>
</div>
</div>
</section>
{/* Upcoming Releases */}
<section id="upcoming-releases" className="mb-16">
<h2 className="text-2xl font-bold mb-8">Upcoming Releases</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{[1, 2, 3].map((item) => (
<div key={item} className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden">
<div className="relative h-48">
<img
src={`https://readdy.ai/api/search-image?query=modern%20abstract%20album%20cover%20art%20with%20futuristic%20elements%20and%20vibrant%20colors%2C%20professional%20music%20artwork%20design&width=400&height=400&seq=${item + 10}&orientation=squarish`}
alt={`Upcoming Release ${item}`}
className="w-full h-full object-cover"
/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
<div className="flex items-center justify-between">
<div>
<h3 className="font-bold">Cosmic Journey</h3>
<p className="text-sm text-gray-400">Nova Beats</p>
</div>
<span className="text-sm text-gray-400">May 15, 2025</span>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-gray-400">Pre-saves</span>
<span className="text-sm">12.5K</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
</div>
</div>
</div>
))}
</div>
</section>
</div>
);
};
const BrandingAgency: React.FC = () => {
return <div>Branding Agency Content</div>;
};
const MerchStore: React.FC = () => {
return <div>Merch Store Content</div>;
};
const PersonalDashboard: React.FC = () => {
return <div>Personal Dashboard Content</div>;
};
const AdminPanel: React.FC = () => {
const [selectedView, setSelectedView] = useState<string>('overview');
const [showUserModal, setShowUserModal] = useState<boolean>(false);
const stats = [
{
title: "Total Users",
value: "2,847",
change: "+12.5%",
icon: "fas fa-users",
color: "blue"
},
{
title: "Active Artists",
value: "164",
change: "+8.3%",
icon: "fas fa-music",
color: "purple"
},
{
title: "Total Revenue",
value: "$487.2K",
change: "+15.7%",
icon: "fas fa-dollar-sign",
color: "green"
},
{
title: "Storage Used",
value: "4.2TB",
change: "+20.1%",
icon: "fas fa-database",
color: "red"
}
];
const recentUsers = [
{
id: 1,
name: "Alex Johnson",
email: "alex@example.com",
role: "Artist",
status: "Active",
joinDate: "2025-04-28"
},
{
id: 2,
name: "Sarah Williams",
email: "sarah@example.com",
role: "Producer",
status: "Active",
joinDate: "2025-04-27"
},
{
id: 3,
name: "Michael Brown",
email: "michael@example.com",
role: "Artist",
status: "Pending",
joinDate: "2025-04-26"
}
];
return (
<div className="container mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h1 className="text-2xl font-bold">Admin Dashboard</h1>
<button
onClick={() => setShowUserModal(true)}
className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center space-x-2 !rounded-button whitespace-nowrap"
>
<i className="fas fa-plus"></i>
<span>Add User</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{stats.map((stat, index) => (
<div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className={`w-12 h-12 bg-${stat.color}-500 bg-opacity-20 rounded-full flex items-center justify-center`}>
<i className={`${stat.icon} text-${stat.color}-500`}></i>
</div>
<span className="text-green-500">{stat.change}</span>
</div>
<h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
<p className="text-gray-400">{stat.title}</p>
</div>
))}
</div>
<div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden mb-8">
<div className="p-6 border-b border-gray-700">
<h2 className="text-xl font-bold">Recent Users</h2>
</div>
<table className="w-full">
<thead>
<tr className="border-b border-gray-700">
<th className="text-left py-4 px-6 font-medium text-gray-400">Name</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Email</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Role</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Status</th>
<th className="text-left py-4 px-6 font-medium text-gray-400">Join Date</th>
<th className="text-left py-4 px-6 font-medium text-gray-400"></th>
</tr>
</thead>
<tbody>
{recentUsers.map((user) => (
<tr key={user.id} className="border-b border-gray-700 last:border-0">
<td className="py-4 px-6">{user.name}</td>
<td className="py-4 px-6">{user.email}</td>
<td className="py-4 px-6">{user.role}</td>
<td className="py-4 px-6">
<span className={`px-2 py-1 rounded-full text-xs ${
user.status === 'Active' ? 'bg-green-500 bg-opacity-20 text-green-500' : 'bg-yellow-500 bg-opacity-20 text-yellow-500'
}`}>
{user.status}
</span>
</td>
<td className="py-4 px-6">{user.joinDate}</td>
<td className="py-4 px-6 relative">
<button
id={`track-menu-button-${track.id}`}
className="text-gray-400 hover:text-white"
onClick={(e) => {
e.stopPropagation();
const menu = document.getElementById(`track-menu-${track.id}`);
const allMenus = document.querySelectorAll('[id^="track-menu-"]');
allMenus.forEach(m => {
if (m.id !== `track-menu-${track.id}`) {
m.classList.add('hidden');
}
});
menu?.classList.toggle('hidden');
}}>
<i className="fas fa-ellipsis-h"></i>
</button>
<div
id={`track-menu-${track.id}`}
className="hidden absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-lg z-50">
<div className="py-2">
<a
href="https://www.youtube.com/@RedVisionMusic"
target="_blank"
rel="noopener noreferrer"
className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fab fa-youtube mr-2"></i>View on YouTube
</a>
<button
className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
<i className="fas fa-share mr-2"></i>Share
</button>
</div>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
{/* Delete Confirmation Dialog */}
<div id="delete-confirm-dialog" className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 hidden">
<div className="bg-gray-900 rounded-xl w-full max-w-md">
<div className="p-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 bg-opacity-20 mx-auto mb-4">
<i className="fas fa-exclamation-triangle text-red-500 text-xl"></i>
</div>
<h3 className="text-xl font-bold text-center mb-2">Delete User</h3>
<p className="text-gray-400 text-center mb-6">
Are you sure you want to delete <span id="delete-user-name" className="font-semibold text-white"></span>? This action cannot be undone.
</p>
<div className="flex justify-center space-x-4">
<button
onClick={() => {
const dialog = document.getElementById('delete-confirm-dialog');
if (dialog) dialog.classList.add('hidden');
}}
className="px-4 py-2 text-sm text-gray-400 hover:text-white bg-gray-800 rounded-lg !rounded-button whitespace-nowrap">
Cancel
</button>
<button
id="confirm-delete-button"
className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 rounded-lg !rounded-button whitespace-nowrap">
Delete
</button>
</div>
</div>
</div>
</div>
{showUserModal && (
<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
<div className="bg-gray-900 rounded-xl w-full max-w-md">
<div className="flex justify-between items-center p-6 border-b border-gray-800">
<h2 className="text-xl font-bold">Add New User</h2>
<button
onClick={() => setShowUserModal(false)}
className="text-gray-400 hover:text-white">
<i className="fas fa-times"></i>
</button>
</div>
<div className="p-6">
<form className="space-y-4">
<div>
<label className="block text-sm text-gray-400 mb-2">Name</label>
<input
type="text"
className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 text-sm"
placeholder="Enter name"
/>
</div>
<div>
<label className="block text-sm text-gray-400 mb-2">Email</label>
<input
type="email"
className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 text-sm"
placeholder="Enter email"
/>
</div>
<div>
<label className="block text-sm text-gray-400 mb-2">Role</label>
<div className="relative">
<select className="w-full bg-gray-800 rounded-lg border border-gray-700 px-4 py-2 text-sm appearance-none">
<option>Artist</option>
<option>Producer</option>
<option>Admin</option>
</select>
<i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>
</form>
</div>
<div className="border-t border-gray-800 p-6 flex justify-end space-x-4">
<button
onClick={() => setShowUserModal(false)}
className="px-4 py-2 text-sm text-gray-400 hover:text-white">
Cancel
</button>
<button className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 rounded-lg !rounded-button whitespace-nowrap">
Add User
</button>
</div>
</div>
</div>
)}
</div>
);
};
export default App
