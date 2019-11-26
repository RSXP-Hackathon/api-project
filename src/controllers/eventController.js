var Event = require("../models/eventModel");

/**
 * Lista os eventos.
 *
 * @param req
 * @param res
 */
exports.list = function(req, res) {
    Event.find(function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Cria um evento.
 *
 * @param req
 * @param res
 */
exports.create = function(req, res) {

    var newUser = Event(req.body);

    newUser.save(function(err, User){
        if (err) {
            res.json({'success': false, 'msg': 'Erro ao salvar o evento.'});
        } else {
            res.json({'success': true, 'msg':'Evento salvo com sucesso.'});
        }
    });

}

/**
 * Busca um evento.
 *
 * @param req
 * @param res
 */
exports.find = function(req, res) {
    Event.findById(req.params.id, function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Atualiza um evento.
 *
 * @param req
 * @param res
 */
exports.update = function(req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao salvar o evento.'});
        } else {
            res.json({'success': true, 'msg':'Evento salvo com sucesso.'});
        }
    });
}

/**
 * Exclui um evento.
 *
 * @param req
 * @param res
 */
exports.delete= function(req, res) {
    Event.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao excluir o evento.'});
        } else {
            res.json({'success': true, 'msg':'Empresa excluída com sucesso.'});
        }
    });
}