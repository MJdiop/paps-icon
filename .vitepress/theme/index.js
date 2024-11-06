import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';
import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Layout', Layout);
  },
};
