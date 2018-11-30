module.exports = app => {
    app.router.post('/api/admin/login',app.controller.admin.login)
}