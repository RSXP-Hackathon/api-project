var Lesson = require("../models/lessonModel");

/**
 * Lista os lições.
 *
 * @param req
 * @param res
 */
exports.list = function(req, res) {
    Lesson.find(function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Cria um lição.
 *
 * @param req
 * @param res
 */
exports.create = function(req, res) {

    var newUser = Lesson(req.body);

    newUser.save(function(err, User){
        if (err) {
            res.json({'success': false, 'msg': 'Erro ao salvar o lição.'});
        } else {
            res.json({'success': true, 'msg': 'Lição salva com sucesso.'});
        }
    });

}

/**
 * Busca um lição.
 *
 * @param req
 * @param res
 */
exports.find = function(req, res) {
    Lesson.findById(req.params.id, function(err, response){
        res.json({'success': true, 'data': response});
    });
}

/**
 * Atualiza um lição.
 *
 * @param req
 * @param res
 */
exports.update = function(req, res) {
    Lesson.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao salvar o lição.'});
        } else {
            res.json({'success': true, 'msg': 'Lição salva com sucesso.'});
        }
    });
}

/**
 * Exclui um lição.
 *
 * @param req
 * @param res
 */
exports.delete= function(req, res) {
    Lesson.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao excluir o lição.'});
        } else {
            res.json({'success': true, 'msg': 'Lição excluída com sucesso.'});
        }
    });
}