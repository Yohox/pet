import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/Users/yoho/pet/admin/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/Users/yoho/pet/admin/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/yoho/pet/admin/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/yoho/pet/admin/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/Users/yoho/pet/admin/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/yoho/pet/admin/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/yoho/pet/admin/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('/Users/yoho/pet/admin/src/pages/Admin/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('/Users/yoho/pet/admin/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('/Users/yoho/pet/admin/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('/Users/yoho/pet/admin/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('/Users/yoho/pet/admin/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('/Users/yoho/pet/admin/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('/Users/yoho/pet/admin/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('/Users/yoho/pet/admin/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('/Users/yoho/pet/admin/src/pages/Account/Settings/models/geographic.js').default) });
