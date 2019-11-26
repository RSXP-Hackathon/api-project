var Module = require("../models/moduleModel");

/**
 * Lista os módulos.
 *
 * @param req
 * @param res
 */
exports.list = function(req, res) {
    Module.find(function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Cria um módulo.
 *
 * @param req
 * @param res
 */
exports.create = function(req, res) {

    var newUser = Module(req.body);

    newUser.save(function(err, User){
        if (err) {
            res.json({'success': false, 'msg': 'Erro ao salvar o módulo.'});
        } else {
            res.json({'success': true, 'msg': 'Módulo salvo com sucesso.'});
        }
    });

}

/**
 * Busca um módulo.
 *
 * @param req
 * @param res
 */
exports.find = function(req, res) {
    Module.findById(req.params.id, function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Atualiza um módulo.
 *
 * @param req
 * @param res
 */
exports.update = function(req, res) {
    Module.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao salvar o módulo.'});
        } else {
            res.json({'success': true, 'msg': 'Módulo salvo com sucesso.'});
        }
    });
}

/**
 * Exclui um módulo.
 *
 * @param req
 * @param res
 */
exports.delete= function(req, res) {
    Module.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao excluir o módulo.'});
        } else {
            res.json({'success': true, 'msg': 'Módulo excluída com sucesso.'});
        }
    });
}