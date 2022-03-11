import Iphone1 from './../../assets/images/iphone1.png'
import Iphone2 from './../../assets/images/iphone2.png'
import Iphone3 from './../../assets/images/iphone3.png'

import Download from './../../assets/images/download.png'
import Talk from './../../assets/images/talk.png'
import Get from './../../assets/images/get.png'

export const apiValues = {
    firstState: {
        title: 'Pobierz aplikację',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
        linkText: 'Pobierz aplikację',
        background: 'bg-emerald-400',
        buttonBackground: 'bg-sky-800',
        textColor: 'text-white',
        icon: Download.src
    },
    secondState: {
        title: 'Porozmawiaj z lekarzem',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
        linkText: 'Pobierz aplikację',
        background: 'bg-sky-800',
        buttonBackground: 'bg-emerald-400',
        textColor: 'text-white',
        icon: Talk.src
    },
    thirdState: {
        title: 'Otrzymaj receptę',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
        linkText: 'Pobierz aplikację',
        background: 'bg-pink-300',
        buttonBackground: 'bg-sky-800',
        textColor: 'text-slate-700',
        icon: Get.src
    },
    iphoneScreens: [
        Iphone1.src,
        Iphone2.src,
        Iphone3.src
    ]
}