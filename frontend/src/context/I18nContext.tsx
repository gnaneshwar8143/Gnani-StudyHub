import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import api from '../lib/api';
import { useAuth } from './AuthContext';

export type Language = 'en' | 'te' | 'hi' | 'fr';

interface I18nContextType {
  language: Language;
  changeLanguage: (lang: Language) => Promise<void>;
  t: (key: string) => string;
  formatDate: (date: Date | string, options?: Intl.DateTimeFormatOptions) => string;
  formatTime: (timeStr: string) => string;
  formatNumber: (num: number) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    // Sidebar / Navigation
    'nav.dashboard': 'Dashboard',
    'nav.goals': 'Goals',
    'nav.habits': 'Habits',
    'nav.calendar': 'Calendar',
    'nav.profile': 'Profile Settings',
    'nav.logout': 'Logout',
    'sidebar.lvl': 'Lvl',
    'sidebar.student': 'Student',
    'sidebar.xp': 'XP Progress',
    'sidebar.streak': 'Streak',
    'sidebar.study': 'Total Study',
    'sidebar.days': 'Days',
    'sidebar.hours': 'Hrs',

    // Dashboard
    'dash.greeting.morning': '👋 Good Morning,',
    'dash.greeting.afternoon': '👋 Good Afternoon,',
    'dash.greeting.evening': '👋 Good Evening,',
    'dash.subtitle': 'Ready to achieve your study goals today?',
    'dash.tip.title': 'Daily Tip',
    'dash.quote.title': '💬 Quote of the Day',
    'dash.quote.category': '📚 Category',
    'dash.quote.lang': '🌐 Language',
    'dash.quote.next': '🔄 Next Quote',
    'dash.quote.save': '❤ Save Favorite',
    'dash.quote.share': '📤 Share Quote',
    'dash.focus.score': 'Focus Score',
    'dash.xp.earned': 'XP Earned',
    'dash.tasks.done': 'Tasks Done',
    'dash.weekly.progress': 'Weekly Progress',
    'dash.goals.completed': 'Goals Completed',
    'dash.start.study': 'Start Study Session',
    'dash.study.hero': 'Study Session Hero',
    'dash.pomodoro.work': 'Work Session',
    'dash.pomodoro.break': 'Short Break',
    'dash.quick.actions': 'Quick Actions',
    'dash.add.goal': 'Add Goal',
    'dash.add.habit': 'Add Habit',
    'dash.view.history': 'View History',
    'dash.active.workspace': 'Active Workspace',

    // Goals (Objectives)
    'goals.title': 'Goals Tracker',
    'goals.subtitle': 'Drag cards between columns to update your progress.',
    'goals.add': 'Create Goal',
    'goals.placeholder': 'Deploy new goal objective...',
    'goals.priority.high': 'High',
    'goals.priority.medium': 'Medium',
    'goals.priority.low': 'Low',
    'goals.status.todo': 'To Do',
    'goals.status.inprogress': 'In Progress',
    'goals.status.inreview': 'In Review',
    'goals.status.completed': 'Completed',
    'goals.due': 'Due',
    'goals.complete.all': 'Complete All',
    'goals.delete': 'Delete Goal',

    // Habits
    'habits.title': 'Habit Tracker',
    'habits.subtitle': 'Log your habits, maintain streak benchmarks, and develop consistency.',
    'habits.create': 'Create Habit',
    'habits.templates': 'Templates',
    'habits.history': 'View History',
    'habits.weekly.progress': 'Weekly Progress',
    'habits.streak.active': 'Streak Active',
    'habits.keep.streak': 'Amazing job keeping your streak!',
    'habits.monthly.summary': 'Monthly Summary',
    'habits.total.completed': 'Total Habits Completed',
    'habits.best.day': 'Best Day',
    'habits.longest.streak': 'Longest Streak',
    'habits.completion.rate': 'Completion Rate',
    'habits.study.hours': 'Study Hours',
    'habits.history.title': 'Habit Telemetry History',
    'habits.history.empty': 'No historical telemetry recorded.',
    'habits.create.title': 'Initialize Habit Vector',
    'habits.name': 'Habit Name',
    'habits.category': 'Category',
    'habits.target': 'Target Streak',
    'habits.cancel': 'Cancel',
    'habits.submit': 'Deploy Habit',

    // Calendar
    'cal.title': 'Calendar Planner',
    'cal.subtitle': 'Manage your roadmap schedule, set custom reminders, and inspect daily task counts.',
    'cal.add.task': 'Add Task',
    'cal.edit.task': 'Edit Task',
    'cal.agenda': 'Agenda Radar',
    'cal.scheduled.today': 'Scheduled Today',
    'cal.no.tasks': 'No tasks allocated.',
    'cal.today': 'Today',
    'cal.priority': 'Priority',
    'cal.task.type': 'Task Type',
    'cal.time': 'Time',
    'cal.date': 'Date',

    // Profile Settings
    'profile.title': 'Profile Settings',
    'profile.subtitle': 'Manage your profile information, appearance preferences, achievements, stats, and security configurations.',
    'profile.tab.settings': 'Profile Settings',
    'profile.tab.appearance': 'Appearance Settings',
    'profile.tab.achievements': 'Achievements & Stats',
    'profile.tab.preferences': 'Preferences',
    'profile.tab.security': 'Password & Security',
    'profile.pic.title': 'Profile Photo',
    'profile.pic.upload': 'Upload Profile Picture',
    'profile.full.name': 'Full Name',
    'profile.email': 'Email Address',
    'profile.save': 'Save Changes',
    'profile.change.password': 'Change Password',
    'profile.appearance.theme': 'Theme Mode',
    'profile.appearance.accent': 'Accent Palette',
    'profile.appearance.lang': 'Language Preferences',
    'profile.pref.timezone': 'Timezone Settings',
    'profile.pref.language': 'Application Language',
    'profile.security.title': 'Security Pipeline',
    'profile.security.current': 'Current Password',
    'profile.security.new': 'New Password',
    'profile.security.confirm': 'Confirm New Password',
    'profile.security.delete': 'Terminate Account',

    // Auth Pages
    'auth.welcome': 'Welcome back to Gnani',
    'auth.welcome.sub': 'Continue your cognitive workflow optimization.',
    'auth.create': 'Create Gnani Account',
    'auth.create.sub': 'Begin your dynamic productivity journey.',
    'auth.signin': 'Sign In',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.remember': 'Remember Me',
    'auth.forgot': 'Forgot Password?',
    'auth.noaccount': "Don't have an account?",
    'auth.hasaccount': 'Already have an account?',
    'auth.forgot.title': 'Reset password request',
    'auth.forgot.desc': 'Enter your registered email to receive a recovery token link.',
    'auth.forgot.submit': 'Send Reset Link',
    'auth.forgot.back': 'Back to Login',

    // Messages
    'msg.unauthorized': 'Session expired or unauthorized request. Redirecting...',
    'msg.verifying': 'Verifying your email token...',
    'msg.verified': 'Email successfully verified! You can now log in.',
    'msg.forgot.success': 'Reset password email sent! Please check your inbox.',
    'msg.profile.success': 'Profile updated successfully!',
    'msg.password.success': 'Password changed successfully!'
  },
  te: {
    // Sidebar / Navigation
    'nav.dashboard': 'డాష్‌బోర్డ్',
    'nav.goals': 'లక్ష్యాలు',
    'nav.habits': 'అలవాట్లు',
    'nav.calendar': 'క్యాలెండర్',
    'nav.profile': 'ప్రొఫైల్ సెట్టింగ్స్',
    'nav.logout': 'లాగ్ అవుట్',
    'sidebar.lvl': 'స్థాయి',
    'sidebar.student': 'విద్యార్థి',
    'sidebar.xp': 'XP పురోగతి',
    'sidebar.streak': 'అలవాట్ల పరంపర',
    'sidebar.study': 'మొత్తం అధ్యయనం',
    'sidebar.days': 'రోజులు',
    'sidebar.hours': 'గంటలు',

    // Dashboard
    'dash.greeting.morning': '👋 శుభోదయం,',
    'dash.greeting.afternoon': '👋 శుభ మధ్యాహ్నం,',
    'dash.greeting.evening': '👋 శుభ సాయంత్రం,',
    'dash.subtitle': 'ఈరోజు మీ అధ్యయన లక్ష్యాలను చేరుకోవడానికి సిద్ధంగా ఉన్నారా?',
    'dash.tip.title': 'నేటి చిట్కా',
    'dash.quote.title': '💬 నేటి స్ఫూర్తిదాయక వాక్యం',
    'dash.quote.category': '📚 వర్గం',
    'dash.quote.lang': '🌐 భాష',
    'dash.quote.next': '🔄 తదుపరి వాక్యం',
    'dash.quote.save': '❤ ఇష్టమైనదిగా దాచు',
    'dash.quote.share': '📤 షేర్ చేయి',
    'dash.focus.score': 'ఏకాగ్రత స్కోరు',
    'dash.xp.earned': 'పొందిన XP',
    'dash.tasks.done': 'పూర్తయిన పనులు',
    'dash.weekly.progress': 'వారపు పురోగతి',
    'dash.goals.completed': 'లక్ష్యాలు పూర్తయ్యాయి',
    'dash.start.study': 'అధ్యయన సెషన్‌ను ప్రారంభించు',
    'dash.study.hero': 'అధ్యయన సెషన్ హీరో',
    'dash.pomodoro.work': 'అధ్యయన సమయం',
    'dash.pomodoro.break': 'చిన్న విరామం',
    'dash.quick.actions': 'త్వరిత చర్యలు',
    'dash.add.goal': 'లక్ష్యాన్ని జోడించు',
    'dash.add.habit': 'అలవాటును జోడించు',
    'dash.view.history': 'చరిత్రను చూడు',
    'dash.active.workspace': 'క్రియాశీల వర్క్‌స్పేస్',

    // Goals (Objectives)
    'goals.title': 'లక్ష్యాల ట్రాకర్',
    'goals.subtitle': 'మీ పురోగతిని నవీకరించడానికి నిలువు వరుసల మధ్య కార్డులను లాగండి.',
    'goals.add': 'లక్ష్యాన్ని సృష్టించు',
    'goals.placeholder': 'కొత్త లక్ష్యాన్ని నమోదు చేయండి...',
    'goals.priority.high': 'అధికం',
    'goals.priority.medium': 'మధ్యమం',
    'goals.priority.low': 'అల్పం',
    'goals.status.todo': 'చేయవలసినవి',
    'goals.status.inprogress': 'ప్రగతిలో ఉంది',
    'goals.status.inreview': 'సమీక్షలో ఉంది',
    'goals.status.completed': 'పూర్తయింది',
    'goals.due': 'గడువు',
    'goals.complete.all': 'అన్నీ పూర్తి చేయి',
    'goals.delete': 'లక్ష్యాన్ని తొలగించు',

    // Habits
    'habits.title': 'అలవాట్ల ట్రాకర్',
    'habits.subtitle': 'మీ అలవాట్లను నమోదు చేయండి, పరంపరను కొనసాగించండి మరియు స్థిరత్వాన్ని పెంచుకోండి.',
    'habits.create': 'అలవాటును సృష్టించు',
    'habits.templates': 'టెంప్లేట్లు',
    'habits.history': 'చరిత్రను చూడు',
    'habits.weekly.progress': 'వారపు పురోగతి',
    'habits.streak.active': 'క్రియాశీల పరంపర',
    'habits.keep.streak': 'పరంపరను అద్భుతంగా కొనసాగిస్తున్నారు!',
    'habits.monthly.summary': 'నెలవారీ సారాంశం',
    'habits.total.completed': 'మొత్తం పూర్తయిన అలవాట్లు',
    'habits.best.day': 'ఉత్తమ రోజు',
    'habits.longest.streak': 'సుదీర్ఘ పరంపర',
    'habits.completion.rate': 'పూర్తయిన నిష్పత్తి',
    'habits.study.hours': 'అధ్యయన గంటలు',
    'habits.history.title': 'అలవాట్ల నమోదు చరిత్ర',
    'habits.history.empty': 'నమోదైన చరిత్ర ఏదీ లేదు.',
    'habits.create.title': 'అలవాటును సృష్టించండి',
    'habits.name': 'అలవాటు పేరు',
    'habits.category': 'వర్గం',
    'habits.target': 'లక్ష్య పరంపర',
    'habits.cancel': 'రద్దు చేయి',
    'habits.submit': 'అలవాటును అమలు చేయి',

    // Calendar
    'cal.title': 'క్యాలెండర్ ప్లానర్',
    'cal.subtitle': 'మీ షెడ్యూల్‌ను నిర్వహించండి, రిమైండర్‌లను సెట్ చేయండి మరియు రోజువారీ పనులను తనిఖీ చేయండి.',
    'cal.add.task': 'పనిని జోడించు',
    'cal.edit.task': 'పనిని సవరించు',
    'cal.agenda': 'ఎజెండా రాడార్',
    'cal.scheduled.today': 'ఈరోజు షెడ్యూల్ చేసినవి',
    'cal.no.tasks': 'ఏ పనులూ కేటాయించలేదు.',
    'cal.today': 'ఈరోజు',
    'cal.priority': 'ప్రాధాన్యత',
    'cal.task.type': 'పని రకం',
    'cal.time': 'సమయం',
    'cal.date': 'తేదీ',

    // Profile Settings
    'profile.title': 'ప్రొఫైల్ సెట్టింగ్స్',
    'profile.subtitle': 'మీ ప్రొఫైల్ సమాచారం, ప్రదర్శన సెట్టింగ్స్, విజయాలు, గణాంకాలు మరియు భద్రతా కాన్ఫిగరేషన్‌లను నిర్వహించండి.',
    'profile.tab.settings': 'ప్రొఫైల్ సెట్టింగ్స్',
    'profile.tab.appearance': 'ప్రదర్శన సెట్టింగ్స్',
    'profile.tab.achievements': 'విజయాలు & గణాంకాలు',
    'profile.tab.preferences': 'ప్రాధాన్యతలు',
    'profile.tab.security': 'భద్రత & పాస్‌వర్డ్',
    'profile.pic.title': 'ప్రొఫైల్ ఫోటో',
    'profile.pic.upload': 'ప్రొఫైల్ చిత్రాన్ని అప్‌లోడ్ చేయి',
    'profile.full.name': 'పూర్తి పేరు',
    'profile.email': 'ఇమెయిల్ చిరునామా',
    'profile.save': 'మార్పులను సేవ్ చేయి',
    'profile.change.password': 'పాస్‌వర్డ్ మార్చండి',
    'profile.appearance.theme': 'థీమ్ మోడ్',
    'profile.appearance.accent': 'యాక్సెంట్ రంగులు',
    'profile.appearance.lang': 'భాషా ప్రాధాన్యతలు',
    'profile.pref.timezone': 'టైమ్‌జోన్ సెట్టింగ్స్',
    'profile.pref.language': 'అప్లికేషన్ భాష',
    'profile.security.title': 'భద్రతా సెట్టింగ్స్',
    'profile.security.current': 'ప్రస్తుత పాస్‌వర్డ్',
    'profile.security.new': 'కొత్త పాస్‌వర్డ్',
    'profile.security.confirm': 'కొత్త పాస్‌వర్డ్ నిర్ధారణ',
    'profile.security.delete': 'ఖాతాను తొలగించు',

    // Auth Pages
    'auth.welcome': 'Gnani కి తిరిగి స్వాగతం',
    'auth.welcome.sub': 'మీ ఉత్పాదకతను మరింత మెరుగుపరచుకోండి.',
    'auth.create': 'Gnani ఖాతాను సృష్టించండి',
    'auth.create.sub': 'మీ ఉత్పాదకత ప్రయాణాన్ని ప్రారంభించండి.',
    'auth.signin': 'లాగిన్ అవ్వండి',
    'auth.signup': 'నమోదు చేసుకోండి',
    'auth.email': 'ఇమెయిల్ చిరునామా',
    'auth.password': 'పాస్‌వర్డ్',
    'auth.name': 'పూర్తి పేరు',
    'auth.remember': 'నన్ను గుర్తుంచుకో',
    'auth.forgot': 'పాస్‌వర్డ్ మర్చిపోయారా?',
    'auth.noaccount': 'ఖాతా లేదా?',
    'auth.hasaccount': 'ఇప్పటికే ఖాతా ఉందా?',
    'auth.forgot.title': 'పాస్‌వర్డ్ రీసెట్ అభ్యర్థన',
    'auth.forgot.desc': 'రికవరీ లింక్ పొందడానికి మీ నమోదిత ఇమెయిల్ నమోదు చేయండి.',
    'auth.forgot.submit': 'రీసెట్ లింక్ పంపించు',
    'auth.forgot.back': 'తిరిగి లాగిన్‌కు వెళ్ళు',

    // Messages
    'msg.unauthorized': 'సెషన్ గడువు ముగిసింది. దయచేసి తిరిగి లాగిన్ అవ్వండి...',
    'msg.verifying': 'మీ ఇమెయిల్ టోకెన్ ధృవీకరిస్తున్నాము...',
    'msg.verified': 'ఇమెయిల్ విజయవంతంగా ధృవీకరించబడింది! మీరు ఇప్పుడు లాగిన్ అవ్వవచ్చు.',
    'msg.forgot.success': 'పాస్‌వర్డ్ రీసెట్ ఇమెయిల్ పంపబడింది! మీ ఇన్‌బాక్స్ తనిఖీ చేయండి.',
    'msg.profile.success': 'ప్రొఫైల్ విజయవంతంగా నవీకరించబడింది!',
    'msg.password.success': 'పాస్‌వర్డ్ విజయవంతంగా మార్చబడింది!'
  },
  hi: {
    // Sidebar / Navigation
    'nav.dashboard': 'डैशबोर्ड',
    'nav.goals': 'लक्ष्य',
    'nav.habits': 'आदतें',
    'nav.calendar': 'कैलेंडर',
    'nav.profile': 'प्रोफ़ाइल सेटिंग्स',
    'nav.logout': 'लॉग आउट',
    'sidebar.lvl': 'स्तर',
    'sidebar.student': 'छात्र',
    'sidebar.xp': 'XP प्रगति',
    'sidebar.streak': 'आदत सिलसिला',
    'sidebar.study': 'कुल अध्ययन',
    'sidebar.days': 'दिन',
    'sidebar.hours': 'घंटे',

    // Dashboard
    'dash.greeting.morning': '👋 सुप्रभात,',
    'dash.greeting.afternoon': '👋 नमस्कार,',
    'dash.greeting.evening': '👋 शुभ संध्या,',
    'dash.subtitle': 'क्या आज आप अपने अध्ययन लक्ष्यों को प्राप्त करने के लिए तैयार हैं?',
    'dash.tip.title': 'आज का सुझाव',
    'dash.quote.title': '💬 आज का विचार',
    'dash.quote.category': '📚 श्रेणी',
    'dash.quote.lang': '🌐 भाषा',
    'dash.quote.next': '🔄 अगला विचार',
    'dash.quote.save': '❤ पसंदीदा में जोड़ें',
    'dash.quote.share': '📤 साझा करें',
    'dash.focus.score': 'एकाग्रता स्कोर',
    'dash.xp.earned': 'प्राप्त XP',
    'dash.tasks.done': 'पूर्ण कार्य',
    'dash.weekly.progress': 'साप्ताहिक प्रगति',
    'dash.goals.completed': 'लक्ष्य पूर्ण',
    'dash.start.study': 'अध्ययन सत्र शुरू करें',
    'dash.study.hero': 'अध्ययन सत्र नायक',
    'dash.pomodoro.work': 'कार्य सत्र',
    'dash.pomodoro.break': 'छोटा ब्रेक',
    'dash.quick.actions': 'त्वरित कार्रवाई',
    'dash.add.goal': 'लक्ष्य जोड़ें',
    'dash.add.habit': 'आदत जोड़ें',
    'dash.view.history': 'इतिहास देखें',
    'dash.active.workspace': 'सक्रिय कार्यक्षेत्र',

    // Goals (Objectives)
    'goals.title': 'लक्ष्य ट्रैकर',
    'goals.subtitle': 'अपनी प्रगति को अपडेट करने के लिए कार्ड को कॉलम के बीच खींचें।',
    'goals.add': 'लक्ष्य बनाएं',
    'goals.placeholder': 'नया लक्ष्य दर्ज करें...',
    'goals.priority.high': 'उच्च',
    'goals.priority.medium': 'मध्यम',
    'goals.priority.low': 'निम्न',
    'goals.status.todo': 'करने के लिए',
    'goals.status.inprogress': 'प्रगति पर',
    'goals.status.inreview': 'समीक्षा के तहत',
    'goals.status.completed': 'पूर्ण',
    'goals.due': 'ग़ैर-वाजिब',
    'goals.complete.all': 'सभी पूर्ण करें',
    'goals.delete': 'लक्ष्य हटाएं',

    // Habits
    'habits.title': 'आदत ट्रैकर',
    'habits.subtitle': 'अपनी आदतें दर्ज करें, निरंतरता बनाए रखें और दृढ़ संकल्प विकसित करें।',
    'habits.create': 'आदत बनाएं',
    'habits.templates': 'टेम्पलेट्स',
    'habits.history': 'इतिहास देखें',
    'habits.weekly.progress': 'साप्ताहिक प्रगति',
    'habits.streak.active': 'सक्रिय सिलसिला',
    'habits.keep.streak': 'सिलसिला बनाए रखने के लिए बहुत बढ़िया काम!',
    'habits.monthly.summary': 'मासिक सारांश',
    'habits.total.completed': 'कुल पूर्ण आदतें',
    'habits.best.day': 'सर्वश्रेष्ठ दिन',
    'habits.longest.streak': 'सबसे लंबा सिलसिला',
    'habits.completion.rate': 'पूर्णता दर',
    'habits.study.hours': 'अध्ययन के घंटे',
    'habits.history.title': 'आदत इतिहास रिकॉर्ड',
    'habits.history.empty': 'कोई पुराना आदत इतिहास नहीं है।',
    'habits.create.title': 'नई आदत स्थापित करें',
    'habits.name': 'आदत का नाम',
    'habits.category': 'श्रेणी',
    'habits.target': 'लक्ष्य सिलसिला',
    'habits.cancel': 'रद्द करें',
    'habits.submit': 'आदत लागू करें',

    // Calendar
    'cal.title': 'कैलेंडर प्लानर',
    'cal.subtitle': 'अपना कार्यक्रम प्रबंधित करें, अनुस्मारक सेट करें और दैनिक कार्यों की जांच करें।',
    'cal.add.task': 'कार्य जोड़ें',
    'cal.edit.task': 'कार्य संपादित करें',
    'cal.agenda': 'कार्यसूची रडार',
    'cal.scheduled.today': 'आज के लिए निर्धारित',
    'cal.no.tasks': 'कोई कार्य आवंटित नहीं है।',
    'cal.today': 'आज',
    'cal.priority': 'प्राथमिकता',
    'cal.task.type': 'कार्य का प्रकार',
    'cal.time': 'समय',
    'cal.date': 'तिथि',

    // Profile Settings
    'profile.title': 'प्रोफ़ाइल सेटिंग्स',
    'profile.subtitle': 'अपनी प्रोफ़ाइल जानकारी, प्रकटन सेटिंग्स, उपलब्धियां, आंकड़े और सुरक्षा सेटिंग्स प्रबंधित करें।',
    'profile.tab.settings': 'प्रोफ़ाइल सेटिंग्स',
    'profile.tab.appearance': 'प्रकटन सेटिंग्स',
    'profile.tab.achievements': 'उपलब्धियां और आंकड़े',
    'profile.tab.preferences': 'प्राथमिकताएं',
    'profile.tab.security': 'पासवर्ड और सुरक्षा',
    'profile.pic.title': 'प्रोफ़ाइल फ़ोटो',
    'profile.pic.upload': 'प्रोफ़ाइल चित्र अपलोड करें',
    'profile.full.name': 'पूरा नाम',
    'profile.email': 'ईमेल पता',
    'profile.save': 'परिवर्तन सहेजें',
    'profile.change.password': 'पासवर्ड बदलें',
    'profile.appearance.theme': 'थीम मोड',
    'profile.appearance.accent': 'एक्सेंट रंग',
    'profile.appearance.lang': 'भाषा प्राथमिकताएं',
    'profile.pref.timezone': 'समय क्षेत्र सेटिंग्स',
    'profile.pref.language': 'एप्लिकेशन की भाषा',
    'profile.security.title': 'सुरक्षा सेटिंग्स',
    'profile.security.current': 'वर्तमान पासवर्ड',
    'profile.security.new': 'नया पासवर्ड',
    'profile.security.confirm': 'नए पासवर्ड की पुष्टि करें',
    'profile.security.delete': 'खाता समाप्त करें',

    // Auth Pages
    'auth.welcome': 'Gnani में आपका स्वागत है',
    'auth.welcome.sub': 'अपनी उत्पादकता को अनुकूलित करना जारी रखें।',
    'auth.create': 'Gnani खाता बनाएं',
    'auth.create.sub': 'अपनी उत्पादकता यात्रा शुरू करें।',
    'auth.signin': 'साइन इन करें',
    'auth.signup': 'साइन अप करें',
    'auth.email': 'ईमेल पता',
    'auth.password': 'पासवर्ड',
    'auth.name': 'पूरा नाम',
    'auth.remember': 'मुझे याद रखें',
    'auth.forgot': 'पासवर्ड भूल गए?',
    'auth.noaccount': 'खाता नहीं है?',
    'auth.hasaccount': 'पहले से ही खाता है?',
    'auth.forgot.title': 'पासवर्ड रीसेट अनुरोध',
    'auth.forgot.desc': 'रिकवरी लिंक प्राप्त करने के लिए अपना पंजीकृत ईमेल दर्ज करें।',
    'auth.forgot.submit': 'रीसेट लिंक भेजें',
    'auth.forgot.back': 'लॉगिन पर लौटें',

    // Messages
    'msg.unauthorized': 'सत्र समाप्त हो गया है। कृपया पुनः लॉगिन करें...',
    'msg.verifying': 'आपके ईमेल टोकन को सत्यापित किया जा रहा है...',
    'msg.verified': 'ईमेल सफलतापूर्वक सत्यापित किया गया! अब आप लॉगिन कर सकते हैं।',
    'msg.forgot.success': 'पासवर्ड रीसेट ईमेल भेजा गया! अपना इनबॉक्स जांचें।',
    'msg.profile.success': 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई!',
    'msg.password.success': 'पासवर्ड सफलतापूर्वक बदला गया!'
  },
  fr: {
    // Sidebar / Navigation
    'nav.dashboard': 'Tableau de bord',
    'nav.goals': 'Objectifs',
    'nav.habits': 'Habitudes',
    'nav.calendar': 'Calendrier',
    'nav.profile': 'Paramètres',
    'nav.logout': 'Déconnexion',
    'sidebar.lvl': 'Niveau',
    'sidebar.student': 'Étudiant',
    'sidebar.xp': 'Progression XP',
    'sidebar.streak': 'Série',
    'sidebar.study': 'Étude Totale',
    'sidebar.days': 'Jours',
    'sidebar.hours': 'Hrs',

    // Dashboard
    'dash.greeting.morning': '👋 Bon matin,',
    'dash.greeting.afternoon': '👋 Bon après-midi,',
    'dash.greeting.evening': '👋 Bonsoir,',
    'dash.subtitle': 'Prêt à atteindre vos objectifs d\'étude aujourd\'hui ?',
    'dash.tip.title': 'Conseil du jour',
    'dash.quote.title': '💬 Citation du Jour',
    'dash.quote.category': '📚 Catégorie',
    'dash.quote.lang': '🌐 Langue',
    'dash.quote.next': '🔄 Citation Suivante',
    'dash.quote.save': '❤ Enregistrer aux Favoris',
    'dash.quote.share': '📤 Partager la Citation',
    'dash.focus.score': 'Score de Focus',
    'dash.xp.earned': 'XP Gagné',
    'dash.tasks.done': 'Tâches Faites',
    'dash.weekly.progress': 'Progression Hebdomadaire',
    'dash.goals.completed': 'Objectifs Terminés',
    'dash.start.study': 'Lancer une Session',
    'dash.study.hero': 'Héros de la Session',
    'dash.pomodoro.work': 'Session de Travail',
    'dash.pomodoro.break': 'Courte Pause',
    'dash.quick.actions': 'Actions Rapides',
    'dash.add.goal': 'Ajouter Objectif',
    'dash.add.habit': 'Ajouter Habitude',
    'dash.view.history': 'Historique',
    'dash.active.workspace': 'Espace Actif',

    // Goals (Objectives)
    'goals.title': 'Suivi des Objectifs',
    'goals.subtitle': 'Faites glisser les cartes entre les colonnes pour mettre à jour vos progrès.',
    'goals.add': 'Créer Objectif',
    'goals.placeholder': 'Nouvel objectif...',
    'goals.priority.high': 'Haute',
    'goals.priority.medium': 'Moyenne',
    'goals.priority.low': 'Basse',
    'goals.status.todo': 'À faire',
    'goals.status.inprogress': 'En cours',
    'goals.status.inreview': 'En révision',
    'goals.status.completed': 'Terminé',
    'goals.due': 'Échéance',
    'goals.complete.all': 'Tout Terminer',
    'goals.delete': 'Supprimer l\'objectif',

    // Habits
    'habits.title': 'Suivi des Habitudes',
    'habits.subtitle': 'Enregistrez vos habitudes, maintenez votre série et développez votre constance.',
    'habits.create': 'Créer Habitude',
    'habits.templates': 'Modèles',
    'habits.history': 'Historique',
    'habits.weekly.progress': 'Progrès Hebdomadaires',
    'habits.streak.active': 'Série Active',
    'habits.keep.streak': 'Excellent travail pour maintenir votre série !',
    'habits.monthly.summary': 'Résumé Mensuel',
    'habits.total.completed': 'Total Habitudes Complétées',
    'habits.best.day': 'Meilleur Jour',
    'habits.longest.streak': 'Plus Longue Série',
    'habits.completion.rate': 'Taux de Réussite',
    'habits.study.hours': 'Heures d\'Étude',
    'habits.history.title': 'Historique de Télémétrie',
    'habits.history.empty': 'Aucun historique enregistré.',
    'habits.create.title': 'Créer Habitude',
    'habits.name': 'Nom de l\'habitude',
    'habits.category': 'Catégorie',
    'habits.target': 'Série Cible',
    'habits.cancel': 'Annuler',
    'habits.submit': 'Déployer Habitude',

    // Calendar
    'cal.title': 'Planificateur',
    'cal.subtitle': 'Gérez votre emploi du temps, définissez des rappels et inspectez le nombre de tâches quotidiennes.',
    'cal.add.task': 'Ajouter Tâche',
    'cal.edit.task': 'Modifier Tâche',
    'cal.agenda': 'Radar d\'Agenda',
    'cal.scheduled.today': 'Planifié Aujourd\'hui',
    'cal.no.tasks': 'Aucune tâche allouée.',
    'cal.today': 'Aujourd\'hui',
    'cal.priority': 'Priorité',
    'cal.task.type': 'Type de tâche',
    'cal.time': 'Heure',
    'cal.date': 'Date',

    // Profile Settings
    'profile.title': 'Paramètres du Profil',
    'profile.subtitle': 'Gérez vos informations personnelles, vos préférences d\'affichage, vos succès, vos statistiques et vos configurations de sécurité.',
    'profile.tab.settings': 'Profil',
    'profile.tab.appearance': 'Apparence',
    'profile.tab.achievements': 'Succès & Stats',
    'profile.tab.preferences': 'Préférences',
    'profile.tab.security': 'Sécurité',
    'profile.pic.title': 'Photo de Profil',
    'profile.pic.upload': 'Téléverser Photo',
    'profile.full.name': 'Nom Complet',
    'profile.email': 'Adresse Électronique',
    'profile.save': 'Sauvegarder les modifications',
    'profile.change.password': 'Changer le Mot de passe',
    'profile.appearance.theme': 'Mode Thème',
    'profile.appearance.accent': 'Palette d\'Accentuation',
    'profile.appearance.lang': 'Langue de l\'Application',
    'profile.pref.timezone': 'Fuseau Horaire',
    'profile.pref.language': 'Langue',
    'profile.security.title': 'Sécurité',
    'profile.security.current': 'Mot de passe actuel',
    'profile.security.new': 'Nouveau mot de passe',
    'profile.security.confirm': 'Confirmer nouveau mot de passe',
    'profile.security.delete': 'Supprimer le Compte',

    // Auth Pages
    'auth.welcome': 'Bon retour sur Gnani',
    'auth.welcome.sub': 'Optimisez votre flux de travail cognitif.',
    'auth.create': 'Créer un Compte Gnani',
    'auth.create.sub': 'Commencez votre voyage de productivité.',
    'auth.signin': 'Se Connecter',
    'auth.signup': 'S\'inscrire',
    'auth.email': 'Adresse Électronique',
    'auth.password': 'Mot de passe',
    'auth.name': 'Nom Complet',
    'auth.remember': 'Se souvenir de moi',
    'auth.forgot': 'Mot de passe oublié ?',
    'auth.noaccount': 'Pas encore de compte ?',
    'auth.hasaccount': 'Vous avez déjà un compte ?',
    'auth.forgot.title': 'Demande de réinitialisation',
    'auth.forgot.desc': 'Saisissez votre e-mail pour recevoir un lien de récupération.',
    'auth.forgot.submit': 'Envoyer Lien de Récupération',
    'auth.forgot.back': 'Retour à la Connexion',

    // Messages
    'msg.unauthorized': 'Session expirée ou non autorisée. Redirection...',
    'msg.verifying': 'Vérification de votre jeton...',
    'msg.verified': 'E-mail vérifié avec succès ! Vous pouvez maintenant vous connecter.',
    'msg.forgot.success': 'E-mail de réinitialisation envoyé ! Veuillez vérifier vos messages.',
    'msg.profile.success': 'Profil mis à jour avec succès !',
    'msg.password.success': 'Mot de passe modifié avec succès !'
  }
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { user, accessToken, login } = useAuth();
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language') as Language;
    return saved || 'en';
  });

  // Sync state if user settings has a language preference
  useEffect(() => {
    if (user?.preferences?.language) {
      setLanguageState(user.preferences.language as Language);
    }
  }, [user]);

  const changeLanguage = async (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);

    if (user) {
      try {
        const updatedPrefs = {
          ...user.preferences,
          language: lang
        };
        const response = await api.put('/profile', { preferences: updatedPrefs });
        // Update user state globally
        if (login && accessToken) {
          login(accessToken, response.data);
        }
      } catch (error) {
        console.error('Failed to save language preference on backend:', error);
      }
    }
  };

  const t = (key: string): string => {
    return DICTIONARY[language]?.[key] || DICTIONARY['en']?.[key] || key;
  };

  const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const localeMap: Record<Language, string> = {
      en: 'en-US',
      te: 'te-IN',
      hi: 'hi-IN',
      fr: 'fr-FR'
    };
    return new Intl.DateTimeFormat(localeMap[language], options || { dateStyle: 'long' }).format(d);
  };

  const formatTime = (timeStr: string): string => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    const localeMap: Record<Language, string> = {
      en: 'en-US',
      te: 'te-IN',
      hi: 'hi-IN',
      fr: 'fr-FR'
    };
    return new Intl.DateTimeFormat(localeMap[language], { hour: '2-digit', minute: '2-digit', hour12: language !== 'fr' }).format(date);
  };

  const formatNumber = (num: number): string => {
    const localeMap: Record<Language, string> = {
      en: 'en-US',
      te: 'te-IN',
      hi: 'hi-IN',
      fr: 'fr-FR'
    };
    return new Intl.NumberFormat(localeMap[language]).format(num);
  };

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t, formatDate, formatTime, formatNumber }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
