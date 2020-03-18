module.exports = {
    get AssignStmt() {
        return require("./AssignStmt") 
    },
    get Stmt() {
        return require('./Stmt')
    },
    get DeclareStmt() {
        return require('./DeclareStmt')
    },
    get Block() {
        return require('./DeclareStmt')
    },
    get IfStmt() {
        return require('./IFStmt')
    },
    get Expr() {
        return require("./Expr")
    },
    
    get Factor() {
        return require("./Factor")
    },

    get Variable() {
        return require('./Variable')
    },

    get Scalar() {
        return require('./Scalar')
    }
   
}