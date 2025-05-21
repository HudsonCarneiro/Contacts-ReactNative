exports.verificaToken = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        console.log('Auth Header', authHeader);
        if(!authHeader){
            return res.status(401).json({
                error: 'Token não autorizado'
            });
        }
        const [, token] = authHeader.split(' ');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    }catch (error) {
        console.log(error)
        if (error.name == 'jsonWebTokenError'){
            req.status(401).json({
                error: 'Token inválido'
            })
        }else if(error.name === 'TokenExpiredError'){
            req.status(401).json({
                error: 'Token Expirao'
            })
        }else {
            res.status(500).json({
                error: 'erro autenticação'
            })
        }
    }

}
