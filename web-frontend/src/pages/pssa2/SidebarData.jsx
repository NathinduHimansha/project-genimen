import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MiIcons from "react-icons/im";
import apple from '../../assests/images/apple.png';
import samsung from '../../assests/images/samsung.png';
import huw from '../../assests/images/huw.png';
import asus from '../../assests/images/asus.png';
import google from '../../assests/images/google.png';
import htc from '../../assests/images/htc.png';
import one from '../../assests/images/one.png';
import nokia from '../../assests/images/nokia.png';
import mi from '../../assests/images/mi.png';
import moto from '../../assests/images/moto.png';
import real from '../../assests/images/real.png';
import lg from '../../assests/images/lg.png';
import sony from '../../assests/images/sony.png';
import zte from '../../assests/images/zte.png';

export const SidebarData = [
  {
    title: 'APPLE',
    path: '/overview',
    icon: apple,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'iPhone 11',
        path: '/overview/users',
        icon: <MiIcons.ImMobile />
      },
      {
        title: 'iPhone 7',
        path: '/overview/revenue',
        icon: <MiIcons.ImMobile />
      }
    ]
  },
  {
    title: 'SAMSUNG',
    path: '/reports',
    icon: samsung,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Galaxy A51',
        path: '/reports/reports1',
        icon: <MiIcons.ImMobile />,
        cName: 'sub-nav'
      },
      {
        title: 'Galaxy A70',
        path: '/reports/reports2',
        icon: <MiIcons.ImMobile />,
        cName: 'sub-nav'
      },
      {
        title: 'Galaxy A71',
        path: '/reports/reports3',
        icon: <MiIcons.ImMobile />,
      }
    ]
  },

  {
    title: 'ONE PLUS',
    path: '/messages',
    icon: one,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'OnePlus 7 Pro',
        path: '/messages/message1',
        icon: <MiIcons.ImMobile />
      },
      {
        title: 'OnePlus 6',
        path: '/messages/message2',
        icon: <MiIcons.ImMobile />,
      }
    ]
  },

  {
    title: 'HUAWEI',
    path: '/messages',
    icon: huw,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Huawei P30PRO',
        path: '/messages/message1',
        icon: <MiIcons.ImMobile />,
      },
      {
        title: 'Honor 8S',
        path: '/messages/message2',
        icon: <MiIcons.ImMobile />
      }
    ]
  },

  {
    title: 'GOOGLE',
    path: '/messages',
    icon: google,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <MiIcons.ImMobile />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <MiIcons.ImMobile />,
      }
    ]
  },

  {
    title: 'XIAOMI',
    path: '/messages',
    icon: mi,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pixel 4 XL',
        path: '/messages/message1',
        icon: <MiIcons.ImMobile />
      },
      {
        title: 'Pixel 3 XL',
        path: '/messages/message2',
        icon: <MiIcons.ImMobile />,
      }
    ]
  },

  {
    title: 'MOTOROLLA',
    path: '/messages',
    icon: moto,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Moto G 5G Plus',
        path: '/messages/message1',
        icon: <MiIcons.ImMobile />
      },
      {
        title: 'Moto G7 Play',
        path: '/messages/message2',
        icon: <MiIcons.ImMobile />,
      }
    ]
  }

  
];
