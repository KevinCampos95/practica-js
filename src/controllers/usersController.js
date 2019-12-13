const controller = {};

controller.list = (req, res) =>{
	req.getConnection((err, conn) =>{
		conn.query('SELECT * FROM users',(err, users) =>{
			if (err){
				res.json(err);
			}
			// console.log(customers);
			res.render('users',{
				data: users
			})
		})
	})
}

controller.getUsuario = (req, res) =>{
	const data = req.body;
	req.getConnection((err, conn) =>{
		conn.query('SELECT ? FROM users',(err, users) =>{
			
		})
	})
}

controller.insertUsuario = (req, res) =>{
	const data = req.body;
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO users set ?',[data],(err,users) =>{
			res.redirect('/');
		});
	})
}

module.exports = controller;