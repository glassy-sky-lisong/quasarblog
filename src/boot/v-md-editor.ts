import { boot } from 'quasar/wrappers'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot (({ app }  /* { app, router, ... } */) => {
  // something to do

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  VMdEditor.use(vuepressTheme, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Prism,
  });

  app.use(VMdEditor);
})
