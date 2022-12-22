import { defineComponent, ref } from 'vue';
import CHeader from './CHeader';
import Item from './Item';
import './index.less';

interface TreeNode {
  label: string;
  value?: string;
  icon?: string;
  children?: TreeNode[];
  desc?: string;
}

export default defineComponent({
  isPage: true,
  name: 'Programming',
  setup() {
    const count = ref(0);
    const list = ref<TreeNode[]>([
      {
        label: '博客',
        children: [
          {
            label: '综合',
            children: [
              {
                label: '掘金',
                value: 'https://juejin.cn/',
                icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
                desc: '前端博客技术平台',
              },
              {
                label: 'fhtwl',
                value: 'https://fhtwl.gitee.io/',
                icon: 'https://static.fhtwl.cc/project/navigation/logo.png',
                desc: '个人前端博客技术',
              },
              {
                label: '前端优质博客翻译',
                value:
                  'https://github.com/xitu/gold-miner/blob/master/front-end.md',
                icon: 'https://static.fhtwl.cc/project/navigation/logo.png',
                desc: '前端优质博客翻译',
              },
            ],
          },

          {
            label: '源码解析',
            children: [
              {
                label: 'Vue技术内幕',
                value: 'http://caibaojian.com/vue-design/art/1start-learn.html',
                icon: 'https://cn.vuejs.org/logo.svg',
                desc: 'Vue源码解析',
              },
            ],
          },

          {
            label: '学习教程',
            children: [
              {
                label: 'Node.js学习指南',
                value: 'https://blog.poetries.top/node-learning-notes/',
                icon: 'https://static.fhtwl.cc/project/navigation/logo.png',
                desc: 'Node.js学习指南',
              },
            ],
          },
          {
            label: '面试',
            children: [
              {
                label: '前端进阶之旅',
                value: 'https://interview2.poetries.top/',
                icon: 'https://static.fhtwl.cc/project/navigation/logo.png',
                desc: '前端面试常问题整理',
              },
            ],
          },
        ],
      },
      {
        label: '工具',
        children: [
          {
            label: '创作',
            children: [
              {
                label: 'pixos',
                value: 'https://pixso.cn/app/editor/_cmqGOugGFwLkf5_ilyPQw',
                icon: 'https://pixso.cn/app/pwa/icons/android-launchericon-144-144.png',
                desc: '原型创作工具',
              },
            ],
          },
          {
            label: '图片',
            children: [
              {
                label: 'docsmall',
                value: 'https://docsmall.com/image-compress',
                icon: 'https://docsmall.com/favicon.png',
                desc: '图片压缩',
              },
              {
                label: 'TinyPNG',
                value: 'https://tinypng.com/',
                icon: 'https://tinypng.com/images/favicon.ico',
                desc: '图片压缩',
              },
            ],
          },
          {
            label: '美化',
            children: [
              {
                label: 'Carbon',
                value: 'https://docsmall.com/image-compress',
                icon: 'https://carbon.now.sh/favicon.ico',
                desc: '代码转图片工具',
              },
            ],
          },
          {
            label: '导航',
            children: [
              {
                label: 'tool.lu',
                value: 'https://tool.lu/',
                icon: 'https://tool.lu/favicon.ico',
                desc: '程序员在线工具大全',
              },
            ],
          },
          {
            label: '其它',
            children: [
              {
                label: 'Wappalyzer',
                value: 'https://www.wappalyzer.com/',
                icon: 'https://www.wappalyzer.com/favicon.ico',
                desc: '检测某个网站的技术栈',
              },
            ],
          },
        ],
      },
      {
        label: '素材',
        children: [
          {
            label: '游戏素材',
            children: [
              {
                label: '爱给网',
                value: 'https://www.aigei.com/',
                icon: 'https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico',
                desc: '中国最大的数字娱乐免费素材下载网站,免费提供免费的音效配乐|3D模型|视频|游戏素材资源下载。',
              },
              {
                label: '游研堂',
                value: 'https://gamedev3d.com/',
                icon: 'https://gamedev3d.com/favicon.ico',
                desc: '游研堂 - 最专业的CG资源分享平台,将持续更新Unity,Unreal,模型,动画,原画,音效,教程等优质资源 -  gamedev3d.com',
              },
              {
                label: 'craftpix',
                value: 'https://craftpix.net/',
                icon: 'https://craftpix.net/favicon/favicon.ico',
                desc: '2D Game Assets Store &amp; Free - CraftPix.net',
              },
              {
                label: 'game-icons',
                value: 'https://game-icons.net/',
                icon: 'https://game-icons.net/favicon.ico',
                desc: '4122 free SVG and PNG icons for your games or apps | Game-icons.net',
              },
              {
                label: '素材巷',
                value: 'http://www.sucaixiang.com/',
                icon: 'http://www.sucaixiang.com/favicon.ico',
                desc: '素材巷是一个文案写作平台，包含海量文字词句写作素材和模板，支持在线编辑也可下载或生成Word、Excel、PDF等，可快速进行品牌营销、短视频、朋友圈、广告、海报宣传、公文、会议活动等多种文案或小说文学创作！',
              },
              {
                label: '模之屋',
                value: 'https://www.aplaybox.com/',
                icon: 'https://www.aplaybox.com/favicon.ico',
                desc: '专业模型创作分享社区_模之屋_PlayBox',
              },
            ],
          },
        ],
      },
      {
        label: '划水网站',
        children: [
          {
            label: '游戏',
            children: [
              {
                label: '红白游戏',
                value: 'https://www.yikm.net/logo.png',
                icon: '',
                desc: '小霸王，其乐无穷',
              },
              {
                label: '在线Dos游戏',
                value: 'https://dos.zczc.cz/',
                icon: 'https://dos.zczc.cz/favicon.ico',
                desc: '免费的在线Dos游戏',
              },
            ],
          },
        ],
      },
      {
        label: '美图',
        children: [
          {
            label: '二次元',
            children: [
              {
                label: 'pixivel',
                value: 'https://pixivel.moe',
                icon: 'https://pixivel.moe/favicon.ico',
                desc: '一个可以帮助你下载P站图片的代理，简单美观又快速',
              },
            ],
          },
          {
            label: '摄影',
            children: [
              {
                label: 'stocksnap',
                value: 'https://stocksnap.io/',
                icon: 'https://pixivel.moe/favicon.ico',
                desc: '免费图片素材高清资源库是一个提供可自由下载使用的高清晰摄影图 片作品的素材库，所提供的资源相当实用，该网站由多位摄影师组成，提供丰富的免费照片， 随意使用无需经过授权',
              },
            ],
          },
        ],
      },
    ]);
    return {
      count,
      list,
    };
  },
  methods: {
    renderLevel1(list: TreeNode[]) {
      return list.map((item) => {
        return (
          <div class="level1">
            <div class="title">{item.label}</div>
            {item.children && (
              <div class="content">{this.renderLevel2(item.children)}</div>
            )}
          </div>
        );
      });
    },
    renderLevel2(list: TreeNode[]) {
      return list.map((item) => {
        return (
          <div class="level2">
            <div class="title">{item.label}</div>
            {item.children && (
              <div class="content">{this.renderLevel3(item.children)}</div>
            )}
          </div>
        );
      });
    },
    renderLevel3(list: TreeNode[]) {
      return list.map((item) => {
        return <Item data={item} />;
      });
    },
  },
  render() {
    const { list, renderLevel1 } = this;
    return (
      <div>
        <CHeader />
        <div class="container">{renderLevel1(list)}</div>
      </div>
    );
  },
});
