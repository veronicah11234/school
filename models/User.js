const db=require('../config/db');

const User={
    create:function(user,cb){
        db.query('INSERT INTO users SET?',user,function(err,result){
            if(err) return cb(err);
            return cb (null,result.insertId);
        });
    },

    findByld:function(id,cb){
        db.query('SELECT * FROM user WHERE id=?',id,function(err,result){
            if(err)return cb(err);
            return cb(null,result[0]);
        });
    
    },
    findAll:function(cb){
        db.query('SELECT * FROM users',
        function(err,result){
            if(err) return cb(err);
            return cb(null,result);
        });
    },
   

    update:function(user,cb){
        db.query('UPDATE user SET username =?,email=?,password=? WHERE user.id=?',
        [user.username,user.email,user.password,user.id],function(err,result){
            if(err) return cb(err);
            return cb(null,result.affectedRows);
        });
    },

    delete:function(id,cb){
        db.query('DELETE FROM users WHERE id=?',id,function(err,result){
            if (err) return cb(err) 
            return cb(err,result);
            {
                if(err) return cb(err);
                return cb(null,result.affectedRows);
            }
        });

    }
};

findOne: function generate(query, cb) {
    const fields = Object.keys(query);
    const values = Object.values(query);
    const sql = `SELECT * FROM users WHERE ${fields.map(field => `${field} = ?`).join(' AND ')}`;
    db.query(sql, values, function(err, result) {
      if (err) return cb(err);
      return cb(null, result[0]);
    });
  };


module.exports=User;