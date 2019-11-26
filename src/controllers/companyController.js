var Company = require("../models/companyModel");

/**
 * Lista as empresas.
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
 * Cria uma empresa.
 *
 * @param req
 * @param res
 */
exports.create = function(req, res) {

    var newUser = Company(req.body);

    newUser.save(function(err, User){
        if (err) {
            res.json({'success': false, 'msg': 'Erro ao salvar a empresa.'});
        } else {
            res.json({'success': true, 'msg':'Empresa salva com sucesso.'});
        }
    });

}

/**
 * Busca uma empresa.
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
 * Atualiza uma empresa.
 *
 * @param req
 * @param res
 */
exports.update = function(req, res) {
    Company.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao salvar a empresa.'});
        } else {
            res.json({'success': true, 'msg':'Empresa salva com sucesso.'});
        }
    });
}

/**
 * Exclui uma empresa.
 *
 * @param req
 * @param res
 */
exports.delete= function(req, res) {
    Company.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
            res.json({'success': false, 'msg': 'Erro ao excluir a empresa.'});
        } else {
            res.json({'success': true, 'msg':'Empresa excluída com sucesso.'});
        }
    });
}