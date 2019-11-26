var User = require("../models/userModel");

/**
 * Lista os usuários.
 */
exports.list = function(req, res) {
    User.find(function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Cria um novo usuário.
 */
exports.create = function(req, res) {

    var newUser = User(req.body);

    newUser.save(function(err, User){
        if (err) {
            res.json({'success': false, 'msg': 'Erro ao salvar o usuário.'});
        } else {
            res.json({'success': true, 'msg':'Usuário salvo com sucesso.'});
        }
    });

}

/**
 * Busca um usuário por ID.
 */
exports.find = function(req, res) {
    User.findById(req.params.id, function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Atualiza um usuário de acordo com o ID.
 */
exports.update = function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao salvar o usuário.'});
        } else {
            res.json({'success': true, 'msg':'Usuário salvo com sucesso.'});
        }
    });
}

exports.delete= function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao excluir o usuário.'});
        } else {
            res.json({'success': true, 'msg':'Usuário excluído com sucesso.'});
        }
    });
}