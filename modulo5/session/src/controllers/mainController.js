const mainController = {
    index: (req, res) => {
        res.render('index');
    },

    admin: (req,res) => {
        res.send('Hola Admin: ' + req.query.user);
    }
};

module.exports = mainController;
