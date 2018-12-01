module.exports = app => {
    app.router.post('/api/admin/login',app.controller.admin.login)
    app.router.get('/api/admin/currentUser',app.controller.admin.currentUser);
}