var Company = require("../models/mentorModel");

/**
 * Lista os mentores.
 *
 * @param req
 * @param res
 */
exports.list = function(req, res) {
    Company.find(function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Cria um mentor.
 *
 * @param req
 * @param res
 */
exports.create = function(req, res) {

    var newUser = Company(req.body);

    newUser.save(function(err, User){
        if (err) {
            res.json({'success': false, 'msg': 'Erro ao salvar o mentor.'});
        } else {
            res.json({'success': true, 'msg':'Mentor salvo com sucesso.'});
        }
    });

}

/**
 * Busca um mentor.
 *
 * @param req
 * @param res
 */
exports.find = function(req, res) {
    Company.findById(req.params.id, function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Atualiza um mentor.
 *
 * @param req
 * @param res
 */
exports.update = function(req, res) {
    Company.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao salvar o mentor.'});
        } else {
            res.json({'success': true, 'msg':'Mentor salvo com sucesso.'});
        }
    });
}

/**
 * Exclui um mentor.
 *
 * @param req
 * @param res
 */
exports.delete= function(req, res) {
    Company.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao excluir o mentor.'});
        } else {
            res.json({'success': true, 'msg':'Mentor excluído com sucesso.'});
        }
    });
}