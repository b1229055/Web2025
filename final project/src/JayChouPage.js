import { useState } from 'react';
import './JayChouPage.css';
import jayChouImage from './images/jaychou.jpg';

export default function JayChouPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showAllAwards, setShowAllAwards] = useState(false);
  const [activeTab, setActiveTab] = useState('biography');

//   const albums = [
//     { id: 1, name: '范特西', year: 2001, songs: ['愛在西元前', '簡單愛', '開不了口', '上海一九四三', '對不起', '威廉古堡', '雙截棍', '安靜', '爸我回來了', '分裂'] },
//     { id: 2, name: '葉惠美', year: 2003, songs: ['以父之名', '晴天', '三年二班', '東風破', '你聽得到', '同一種調調', '她的睫毛', '愛情懸崖', '梯田', '雙刀'] },
//     { id: 3, name: '七里香', year: 2004, songs: ['我的地盤', '七里香', '藉口', '外婆', '將軍', '搞笑', '亂舞春秋', '困獸之鬥', '園遊會', '止戰之殤'] },
//     { id: 4, name: '依然范特西', year: 2006, songs: ['夜的第七章', '聽媽媽的話', '千里之外', '本草綱目', '退後', '紅模仿', '心雨', '白色風車', '迷迭香', '菊花台'] },
//     { id: 5, name: '魔杰座', year: 2008, songs: ['龍戰騎士', '給我一首歌的時間', '蛇舞', '花海', '魔術先生', '說好的幸福呢', '蘭亭序', '流浪詩人', '時光機', '喬克叔叔'] }
//   ];
const albums = [
        {
      id: 0,
      name: 'JAY',
      year: 2000,
      songs: [
        { title: '可愛女人', url: 'https://www.youtube.com/watch?v=5XK2C9w6oVk' },
        { title: '完美主義', url: 'https://www.youtube.com/watch?v=Y4xCVlyCvX4' },
        { title: '星晴', url: 'https://www.youtube.com/watch?v=H7hpK6cm-6k' },
        { title: '娘子', url: 'https://www.youtube.com/watch?v=CcfnZOJpbM4' },
        { title: '鬥牛', url: 'https://www.youtube.com/watch?v=N2DkKFxijv0' },
        { title: '黑色幽默', url: 'https://www.youtube.com/watch?v=lCzWCxVAkfc' },
        { title: '伊斯坦堡', url: 'https://www.youtube.com/watch?v=OR-0wptI_u0' },
        { title: '印地安老斑鳩', url: 'https://www.youtube.com/watch?v=1hI-7vj2FhE' },
        { title: '龍捲風', url: 'https://www.youtube.com/watch?v=nhyT8HDT4lg' },
        { title: '反方向的鐘', url: 'https://www.youtube.com/watch?v=eM6mF4RWhe0' },
      ],
    },
    {
      id: 1,
      name: '范特西',
      year: 2001,
      songs: [
        { title: '愛在西元前', url: 'https://www.youtube.com/watch?v=5XK2C9w6oVk' },
        { title: '簡單愛', url: 'https://www.youtube.com/watch?v=Y4xCVlyCvX4' },
        { title: '開不了口', url: 'https://www.youtube.com/watch?v=H7hpK6cm-6k' },
        { title: '上海一九四三', url: 'https://www.youtube.com/watch?v=CcfnZOJpbM4' },
        { title: '對不起', url: 'https://www.youtube.com/watch?v=N2DkKFxijv0' },
        { title: '威廉古堡', url: 'https://www.youtube.com/watch?v=lCzWCxVAkfc' },
        { title: '雙截棍', url: 'https://www.youtube.com/watch?v=OR-0wptI_u0' },
        { title: '安靜', url: 'https://www.youtube.com/watch?v=1hI-7vj2FhE' },
        { title: '爸我回來了', url: 'https://www.youtube.com/watch?v=nhyT8HDT4lg' },
        { title: '分裂', url: 'https://www.youtube.com/watch?v=eM6mF4RWhe0' },
      ],
    },
    {
     id: 2,
      name: '八度空間',
      year: 2002,
     songs: [
      { title: '半獸人', url: 'https://www.youtube.com/watch?v=3I27c6t-0No' },
      { title: '半島鐵盒', url: 'https://www.youtube.com/watch?v=17w04fTYdjo' },
      { title: '暗號', url: 'https://www.youtube.com/watch?v=EU9-clxTh4A' },
      { title: '龍拳', url: 'https://www.youtube.com/watch?v=_byK6M95hTc' },
      { title: '火車叨位去', url: 'https://www.youtube.com/watch?v=K5qKpFLWaoA' },
      { title: '分裂', url: 'https://www.youtube.com/watch?v=eM6mF4RWhe0' },
      { title: '爺爺泡的茶', url: 'https://www.youtube.com/watch?v=M0EV2PpGyzM' },
      { title: '回到過去', url: 'https://www.youtube.com/watch?v=DuZ0pnNayi4' },
      { title: '米蘭的小鐵匠', url: 'https://www.youtube.com/watch?v=g_u6VC0uhPw' },
      { title: '最後的戰役', url: 'https://www.youtube.com/watch?v=DpRje0eC7RE' },
    ],
    },

    {
      id: 3,
      name: '葉惠美',
      year: 2003,
      songs: [
        { title: '以父之名', url: 'https://www.youtube.com/watch?v=9q7JOQfcJQM' },
        { title: '晴天', url: 'https://www.youtube.com/watch?v=DYptgVvkVLQ' },
        { title: '三年二班', url: 'https://www.youtube.com/watch?v=_trE3M24kQY' },
        { title: '東風破', url: 'https://www.youtube.com/watch?v=qct0JLjaHDc' },
        { title: '你聽得到', url: 'https://www.youtube.com/watch?v=kLY11fv7fUk' },
        { title: '同一種調調', url: 'https://www.youtube.com/watch?v=D0x09XJgyO4' },
        { title: '她的睫毛', url: 'https://www.youtube.com/watch?v=gqzlB7Gla2E' },
        { title: '愛情懸崖', url: 'https://www.youtube.com/watch?v=H5VQdhYh9rc' },
        { title: '梯田', url: 'https://www.youtube.com/watch?v=u9J99gB5psc' },
        { title: '雙刀', url: 'https://www.youtube.com/watch?v=T4qPsRLjGCY' },
      ],
    },
    
      {
    id: 4,
    name: '七里香',
    year: 2004,
    songs: [
      { title: '我的地盤', url: 'https://www.youtube.com/watch?v=RJerfq6MqY0' },
      { title: '七里香', url: 'https://www.youtube.com/watch?v=Bbp9ZaJD_eA' },
      { title: '藉口', url: 'https://www.youtube.com/watch?v=KcK8WurGpEQ' },
      { title: '外婆', url: 'https://www.youtube.com/watch?v=Ur-x4pZT1Rk' },
      { title: '將軍', url: 'https://www.youtube.com/watch?v=PaJdceSx4JA' },
      { title: '擱淺', url: 'https://www.youtube.com/watch?v=YJfHuATJYsQ' },
      { title: '亂舞春秋', url: 'https://www.youtube.com/watch?v=2Tg3uzSAkXk' },
      { title: '困獸之鬥', url: 'https://www.youtube.com/watch?v=pm91leB_P8c' },
      { title: '園遊會', url: 'https://www.youtube.com/watch?v=IoCoIxkGkVw' },
      { title: '止戰之殤', url: 'https://www.youtube.com/watch?v=qIZ5MAwbeCg' },
    ],
  },
    {
      id: 5,
      name: '十一月的蕭邦',
      year: 2005,
      songs: [
        { title: '夜曲', url: 'https://www.youtube.com/watch?v=6Q0Pd53mojY' },
        { title: '藍色風暴', url: 'https://www.youtube.com/watch?v=P7ItYKdY0WU' },
        { title: '髮如雪', url: 'https://www.youtube.com/watch?v=aaM7qG2ycjk' },
        { title: '黑色毛衣', url: 'https://www.youtube.com/watch?v=bX33UI9ZPLk' },
        { title: '四面楚歌', url: 'https://www.youtube.com/watch?v=JljURsMOLmc' },
        { title: '楓', url: 'https://www.youtube.com/watch?v=qzwsQTY-99o' },
        { title: '浪漫手機', url: 'https://www.youtube.com/watch?v=Kbvu9Vt5_eE' },
        { title: '逆鱗', url: 'https://www.youtube.com/watch?v=jD0c4QY7L8s' },
        { title: '麥芽糖', url: 'https://www.youtube.com/watch?v=Hq47d-ouX_Y' },
        { title: '珊瑚海', url: 'https://www.youtube.com/watch?v=kYhh1PpsOg4' },
        { title: '飄移', url: 'https://www.youtube.com/watch?v=X2njc8is50o' },
        { title: '一路向北', url: 'https://www.youtube.com/watch?v=L229QDxDakU' },
      ],
    },
        {
      id: 6,
      name: '依然范特西',
      year: 2006,
      songs: [
        { title: '夜的第七章', url: 'https://www.youtube.com/watch?v=AdkkF6MT0R0' },
        { title: '聽媽媽的話', url: 'https://www.youtube.com/watch?v=_B8RaLCNUZw' },
        { title: '千里之外', url: 'https://www.youtube.com/watch?v=ocDo3ySyHSI' },
        { title: '本草綱目', url: 'https://www.youtube.com/watch?v=8CD06hC1KGU' },
        { title: '退後', url: 'https://www.youtube.com/watch?v=0-4mm0e2h44' },
        { title: '紅模仿', url: 'https://www.youtube.com/watch?v=LL50Fu4UvG0' },
        { title: '心雨', url: 'https://www.youtube.com/watch?v=xVTI5eSzwzQ' },
        { title: '白色風車', url: 'https://www.youtube.com/watch?v=K9CbHZLXPIA' },
        { title: '迷迭香', url: 'https://www.youtube.com/watch?v=K0Myfz5phlY' },
        { title: '菊花台', url: 'https://www.youtube.com/watch?v=PdjbRvvJAzg' },
      ],
    },
      {
  id: 7,
  name: '我很忙',
  year: 2007,
  songs: [
    { title: '牛仔很忙', url: 'https://www.youtube.com/watch?v=9o20U91aJdg' },
    { title: '彩虹', url: 'https://www.youtube.com/watch?v=WxZvXPTBC0A' },
    { title: '青花瓷', url: 'https://www.youtube.com/watch?v=Z8Mqw0b9ADs' },
    { title: '陽光宅男', url: 'https://www.youtube.com/watch?v=qQ7g1tfEGFc' },
    { title: '蒲公英的約定', url: 'https://www.youtube.com/watch?v=VitJnr3IySc' },
    { title: '無雙', url: 'https://www.youtube.com/watch?v=IYiIL2ZgOK4' },
    { title: '我不配', url: 'https://www.youtube.com/watch?v=s-VFpsrbWLk' },
    { title: '扯', url: 'https://www.youtube.com/watch?v=f5hakuX3lCA' },
    { title: '甜甜的', url: 'https://www.youtube.com/watch?v=mm8T-lBXQXA' },
    { title: '最長的電影', url: 'https://www.youtube.com/watch?v=2zxc27bvrO8' },
  ],
},

    {
      id: 8,
      name: '魔杰座',
      year: 2008,
      songs: [
        { title: '龍戰騎士', url: 'https://www.youtube.com/watch?v=6VRioN8euIs' },
        { title: '給我一首歌的時間', url: 'https://www.youtube.com/watch?v=wt0RKW3aC84' },
        { title: '蛇舞', url: 'https://www.youtube.com/watch?v=aO9SU-w8hnM' },
        { title: '花海', url: 'https://www.youtube.com/watch?v=q1ww6bDjfiI' },
        { title: '魔術先生', url: 'https://www.youtube.com/watch?v=UXwHuKmuhW8' },
        { title: '說好的幸福呢', url: 'https://www.youtube.com/watch?v=mLFhTFiX0uM' },
        { title: '蘭亭序', url: 'https://www.youtube.com/watch?v=s5Xl5MXboas' },
        { title: '流浪詩人', url: 'https://www.youtube.com/watch?v=-ytYpXm3cv0' },
        { title: '時光機', url: 'https://www.youtube.com/watch?v=nCfrfCzaB2A' },
        { title: '喬克叔叔', url: 'https://www.youtube.com/watch?v=GKT_1DTa2as' },
        { title: '稻香', url: 'https://www.youtube.com/watch?v=sHD_z90ZKV0' },
      ],
    },
       {
      id: 9,
      name: '跨時代',
      year: 2010,
      songs: [
        { title: '跨時代', url: 'https://www.youtube.com/watch?v=-WkecBaA4z8' },
        { title: '說了再見', url: 'https://www.youtube.com/watch?v=KKsioz-zaZY' },
        { title: '煙花易冷', url: 'https://www.youtube.com/watch?v=COMHDRqAvYE' },
        { title: '免費教學錄影帶', url: 'https://www.youtube.com/watch?v=lqVvHAFPIrw' },
        { title: '好久不見', url: 'https://www.youtube.com/watch?v=uAUBexRRFr0' },
        { title: '雨下一整晚', url: 'https://www.youtube.com/watch?v=jOxzAsnx9-0' },
        { title: '嘻哈空姐', url: 'https://www.youtube.com/watch?v=I1boAt2ChIs' },
        { title: '我落淚·情緒零碎', url: 'https://www.youtube.com/watch?v=6d0v2InyN_w' },
        { title: '愛的飛行日記', url: 'https://www.youtube.com/watch?v=odNYK272RtQ' },
        { title: '自導自演', url: 'https://www.youtube.com/watch?v=pbyWurQZ948' },
        { title: '超人不會飛', url: 'https://www.youtube.com/watch?v=4j0Fgmsxr-o' },
      ],
    },
    
      {
    id: 10,
    name: '驚嘆號',
    year: 2011,
    songs: [
      { title: '驚嘆號', url: 'https://www.youtube.com/watch?v=JNS-KT_iwmg' },
      { title: '迷魂曲', url: 'https://www.youtube.com/watch?v=rFxBQWh7ZOQ' },
      { title: 'Mine Mine', url: 'https://www.youtube.com/watch?v=me7jfhFIZvk' },
      { title: '公主病', url: 'https://www.youtube.com/watch?v=S-p4gXbIifo' },
      { title: '你好嗎', url: 'https://www.youtube.com/watch?v=Wrbjahfg8RM' },
      { title: '療傷燒肉粽', url: 'https://www.youtube.com/watch?v=Aa5j0_61Xfo' },
      { title: '琴傷', url: 'https://www.youtube.com/watch?v=yHoadRoVF-U' },
      { title: '水手怕水', url: 'https://www.youtube.com/watch?v=wUJ37I6au2w' },
      { title: '世界未末日', url: 'https://www.youtube.com/watch?v=IteE-HMVJ1M' },
      { title: '皮影戲', url: 'https://www.youtube.com/watch?v=qeW7xypeu6o' },
      { title: '超跑女神', url: 'https://www.youtube.com/watch?v=CllkiAZajJI' },
    ],
  },
    {
      id: 11,
      name: '十二新作',
      year: 2012,
      songs: [
        { title: '四季列車', url: 'https://www.youtube.com/watch?v=SnKAHq6O0Is' },
        { title: '手語', url: 'https://www.youtube.com/watch?v=ChXiROKng30' },
        { title: '公公偏頭痛', url: 'https://www.youtube.com/watch?v=FbqBv7Tz1QY' },
        { title: '明明就', url: 'https://www.youtube.com/watch?v=UBySINroNkw' },
        { title: '傻笑', url: 'https://www.youtube.com/watch?v=rKFtivD7Rvw' },
        { title: '比較大的大提琴', url: 'https://www.youtube.com/watch?v=P_XikgjUOS0' },
        { title: '愛你沒差', url: 'https://www.youtube.com/watch?v=miBGaUagOz8' },
        { title: '紅塵客棧', url: 'https://www.youtube.com/watch?v=L6joGUdc6y4' },
        { title: '夢想啟動', url: 'https://www.youtube.com/watch?v=b42KZYgxXZ0' },
        { title: '大笨鐘', url: 'https://www.youtube.com/watch?v=-u4sPnpaFEA' },
        { title: '哪裡都是你', url: 'https://www.youtube.com/watch?v=yfn8sE9obWU' },
        { title: '烏克麗麗', url: 'https://www.youtube.com/watch?v=-QqpEvN2Xd8' },
      ],
    },
        {
      id: 12,
      name: '哎呦，不錯哦',
      year: 2014,
      songs: [
        { title: '陽明山', url: 'https://www.youtube.com/watch?v=BZlFlBnwfOQ' },
        { title: '竊愛', url: 'https://www.youtube.com/watch?v=6ZeE3vgwQSI' },
        { title: '算什麼男人', url: 'https://www.youtube.com/watch?v=v489sYYjtHI' },
        { title: '天涯過客', url: 'https://www.youtube.com/watch?v=-gJzlOJ0Zoo' },
        { title: '怎麼了', url: 'https://www.youtube.com/watch?v=RcdscWaat_w' },
        { title: '一口氣全唸對', url: 'https://www.youtube.com/watch?v=C18nyaRnR1Q' },
        { title: '我要夏天', url: 'https://www.youtube.com/watch?v=3LFDEeLm0ss' },
        { title: '手寫的從前', url: 'https://www.youtube.com/watch?v=TMB6-YflpA4' },
        { title: '鞋子特大號', url: 'https://www.youtube.com/watch?v=syYc5dydzmE' },
        { title: '聽爸爸的話', url: 'https://www.youtube.com/watch?v=eS2T9IiOYbc' },
        { title: '美人魚', url: 'https://www.youtube.com/watch?v=nHtW9w12uYc' },
        { title: '聽見下雨的聲音', url: 'https://www.youtube.com/watch?v=zqKoXPHhmsM' },
      ],
    },
      {
  id: 13,
  name: '周杰倫的床邊故事 ',
  year: 2016,
  songs: [
    { title: '床邊故事', url: 'https://www.youtube.com/watch?v=-7r6VqSllNg' },
    { title: '說走就走', url: 'https://www.youtube.com/watch?v=NH43WjeoVgs' },
    { title: '一點點', url: 'https://www.youtube.com/watch?v=COhiu3c7Sgc' },
    { title: '前世情人', url: 'https://www.youtube.com/watch?v=j9k3liT2MLo' },
    { title: '英雄', url: 'https://www.youtube.com/watch?v=oQqM30Oh-Pk' },
    { title: '不該', url: 'https://www.youtube.com/watch?v=_VxLOj3TB5k' },
    { title: '土耳其冰淇淋', url: 'https://www.youtube.com/watch?v=kOriLqPD7PI' },
    { title: '告白氣球', url: 'https://www.youtube.com/watch?v=bu7nU9Mhpyo' },
    { title: 'Now You See Me', url: 'https://www.youtube.com/watch?v=LbUKhXO2oCs' },
    { title: '愛情廢柴', url: 'https://www.youtube.com/watch?v=2kdYSeoHChg' },
  ],
},

    {
      id: 14,
      name: '最偉大的作品',
      year: 2022,
      songs: [
        { title: '最偉大的作品', url: 'https://www.youtube.com/watch?v=1emA1EFsPMM' },
        { title: '還在流浪', url: 'https://www.youtube.com/watch?v=BSlMAJ7SkMA' },
        { title: '說好不哭', url: 'https://www.youtube.com/watch?v=HK7SPnGSxLM' },
        { title: '紅顏如霜', url: 'https://www.youtube.com/watch?v=APgx1k-2Tqc' },
        { title: '不愛我就拉倒', url: 'https://www.youtube.com/watch?v=MAjY8mCTXWk' },
        { title: 'Mojito', url: 'https://www.youtube.com/watch?v=-biOGdYiF-I' },
        { title: '錯過的煙火', url: 'https://www.youtube.com/watch?v=9tN1xixvYOc' },
        { title: '等你下課', url: 'https://www.youtube.com/watch?v=kfXdP7nZIiE' },
        { title: '粉色海洋', url: 'https://www.youtube.com/watch?v=F_dGEjzRG_Y' },
        { title: '倒影', url: 'https://www.youtube.com/watch?v=a0AyNzV3yk8' },
        { title: '我是如此相信', url: 'https://www.youtube.com/watch?v=TbFWYT9VGRk' },
      ],
    },
  ];
  

  const achievements = [
    "獲得15座金曲獎",
    "獲得2座全球華語歌曲排行榜最佳男歌手獎",
    "獲得4屆世界音樂大獎中國區最佳銷售藝人",
    "獲得多座MTV亞洲大獎",
    "自創「中國風」音樂風格，將傳統中國元素融入流行音樂",
    "多次登上《時代》雜誌亞洲版封面",
    "獲選為亞洲最具影響力的藝人之一",
    "在電影方面獲得金馬獎最佳新演員獎",
    "作為導演拍攝電影《不能說的秘密》和《天台》",
    "參與好萊塢電影《青蜂俠》的演出",
    "出版多本個人寫真集和攝影集",
    "成立「杰威爾音樂」公司"
  ];

  return (
    <div className="jay-chou-page">
      {/* 頂部橫幅 */}
      <div className="header-banner">
        <h1>周杰倫 Jay Chou</h1>
        <p>華語流行音樂之王</p>
      </div>

      {/* 導航欄 */}
      <div className="nav-bar">
        <button 
          onClick={() => setActiveTab('biography')} 
          className={`nav-button ${activeTab === 'biography' ? 'active' : ''}`}
        >
          個人簡介
        </button>
        <button 
          onClick={() => setActiveTab('music')} 
          className={`nav-button ${activeTab === 'music' ? 'active' : ''}`}
        >
          音樂作品
        </button>
        <button 
          onClick={() => setActiveTab('achievements')} 
          className={`nav-button ${activeTab === 'achievements' ? 'active' : ''}`}
        >
          成就獎項
        </button>
      </div>

      {/* 內容區域 */}
      <div className="container">
        {/* 個人簡介 */}
        {activeTab === 'biography' && (
          <div className="content-card">
            <div className="biography-content">
              <div className="profile-image">
              <div className="profile-image">
                <img src={jayChouImage} alt="周杰倫照片" className="real-image" />
                </div>
              </div>
              <div className="bio-text">
                <h2>個人簡介</h2>
                <div className="bio-paragraphs">
                  <p>周杰倫（Jay Chou），1979年1月18日出生於台灣新北市，是華語樂壇知名的流行音樂歌手、詞曲創作人、音樂製作人、導演、演員及企業家。</p>
                  <p>周杰倫以其獨特的音樂風格和多元的音樂才華聞名於世，他創造的「中國風」音樂將傳統中國元素與西方流行音樂完美融合，開創了華語流行音樂的新紀元。</p>
                  <p>除了音樂成就外，周杰倫還涉足電影、廣告和商業等多個領域，是一位全方位的藝術家。他的音樂作品不僅在華語地區廣受歡迎，更在全球華人社區和國際音樂市場上獲得了廣泛認可。</p>
                  <p>周杰倫被譽為華語流行音樂之王，是華語音樂市場上最具影響力的藝人沒有之一。</p>
                  
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 音樂作品 */}
        {activeTab === 'music' && (
          <div className="content-card">
            <h2>經典專輯</h2>
            <div className="albums-list">
              {albums.map((album) => (
                <div key={album.id} className="album-item">
                  <div 
                    className="album-header"
                    onClick={() => setSelectedAlbum(selectedAlbum === album.id ? null : album.id)}
                  >
                    <div>
                      <span className="album-name">{album.name}</span>
                      <span className="album-year">({album.year})</span>
                    </div>
                    <span>{selectedAlbum === album.id ? '▲' : '▼'}</span>
                  </div>
                  
                  {selectedAlbum === album.id && (
                    <div className="album-songs">
                      <h3>歌曲列表:</h3>
                      <div className="songs-grid">
                        
                            {album.songs.map((song, idx) => (
                                <a
                                  key={idx}
                                  href={song.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="song-item"
                                  title={`播放 ${song.title}`}
                                >
                                  <span className="play-icon">▶</span>
                                  <span>{song.title}</span>
                                </a>
                              ))}
                              
                        {/* {album.songs.map((song, idx) => (
                          <div key={idx} className="song-item">
                            <span className="play-icon">▶</span>
                            <span>{song}</span>
                          </div>
                        ))} */}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="music-features">
              <h3>音樂特色</h3>
              <ul>
                <li>獨創「中國風」音樂風格，將中國古典元素與西方流行音樂結合</li>
                <li>精通多種樂器，尤其是鋼琴</li>
                <li>擅長R&B、嘻哈、爵士、古典等多種音樂風格的融合</li>
                <li>作品中常有獨特的音樂編曲和製作手法</li>
                <li>歌詞內容豐富多彩，涵蓋愛情、親情、社會議題等多種主題</li>
              </ul>
            </div>
          </div>
        )}

        {/* 成就獎項 */}
        {activeTab === 'achievements' && (
          <div className="content-card">
            <h2>成就與獎項</h2>
            <div className="achievements-list">
              {achievements.slice(0, showAllAwards ? achievements.length : 5).map((achievement, idx) => (
                <div key={idx} className="achievement-item">
                  <p>{achievement}</p>
                </div>
              ))}
              
              {achievements.length > 5 && (
                <button 
                  className="show-more-button"
                  onClick={() => setShowAllAwards(!showAllAwards)}
                >
                  {showAllAwards ? (
                    <>
                      <span className="arrow-icon">▲</span>
                      顯示較少
                    </>
                  ) : (
                    <>
                      <span className="arrow-icon">▼</span>
                      查看更多獎項 ({achievements.length - 5})
                    </>
                  )}
                </button>
              )}
            </div>
            
            <div className="other-achievements">
              <h3>其他成就</h3>
              <div className="achievements-grid">
                <div className="other-achievement-item">
                  <h4>電影事業</h4>
                  <p>作為演員參演多部電影，並自導自演《不能說的秘密》和《天台》等電影作品</p>
                </div>
                <div className="other-achievement-item">
                  <h4>商業事業</h4>
                  <p>創立個人音樂公司、餐飲品牌，以及參與多個品牌代言</p>
                </div>
                <div className="other-achievement-item">
                  <h4>慈善活動</h4>
                  <p>參與多項慈善活動，捐款支持教育和災難救助</p>
                </div>
                <div className="other-achievement-item">
                  <h4>國際影響力</h4>
                  <p>在亞洲、歐美等地區舉辦世界巡迴演唱會，提升華語音樂的國際知名度</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 底部資訊 */}
        <div className="footer">
          {/* <p>© 2025 周杰倫粉絲網站 | 此網站僅用於展示，非官方網站</p> */}
        </div>
      </div>
    </div>
  );
}
