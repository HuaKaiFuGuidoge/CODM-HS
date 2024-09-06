const translations = {
    'zh-CN': {
        title: '心跳检测仪',
        description: '点击开始后启动心跳检测仪，再次点击即可取消',
        startButton: '开始'
    },
    'zh-TW': {
        title: '心跳偵測儀',
        description: '點擊開始後啟動心跳偵測儀，再次點擊即可取消',
        startButton: '開始'
    },
    'en': {
        title: 'Heartbeat Sensor',
        description: 'Click Start to begin the Heartbeat Sensor. Click again to cancel.',
        startButton: 'Start'
    },
    'es': {
        title: 'Sensor de latidos',
        description: 'Haz clic en Iniciar para comenzar el Sensor de Latidos. Haz clic de nuevo para cancelar.',
        startButton: 'Iniciar'
    },
    'hi': {
        title: 'हार्टबीट सेंसर',
        description: 'हार्टबीट सेंसर शुरू करने के लिए स्टार्ट पर क्लिक करें। रद्द करने के लिए फिर से क्लिक करें।',
        startButton: 'शुरू करें'
    },
    'ar': {
        title: 'جهاز استشعار نبضات القلب',
        description: 'اضغط على "ابدأ" لبدء جهاز استشعار نبضات القلب. اضغط مرة أخرى للإلغاء.',
        startButton: 'ابدأ'
    },
    'bn': {
        title: 'হার্টবিট সেন্সর',
        description: 'হার্টবিট সেন্সর শুরু করতে শুরু ক্লিক করুন। বাতিল করতে আবার ক্লিক করুন।',
        startButton: 'শুরু'
    },
    'pt': {
        title: 'Sensor de batimentos cardíacos',
        description: 'Clique em Iniciar para começar o Sensor de Batimentos Cardíacos. Clique novamente para cancelar.',
        startButton: 'Iniciar'
    },
    'ru': {
        title: 'Датчик сердцебиения',
        description: 'Нажмите «Начать», чтобы запустить датчик сердцебиения. Нажмите снова, чтобы отменить.',
        startButton: 'Начать'
    }
};

const userLang = navigator.language || navigator.userLanguage;

function setLanguage(lang) {
    const translation = translations[lang] || translations['zh-CN']; // 默认使用中文
    document.title = translation.title;
    document.getElementById('description').textContent = translation.description;
    document.getElementById('startButton').textContent = translation.startButton;
}

setLanguage(userLang.split('-')[0]);
