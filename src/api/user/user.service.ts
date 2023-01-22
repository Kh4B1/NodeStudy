import { Response, Request } from 'express'
import { User } from '../../models/domain/User'
import * as bcrypt from 'bcrypt'
import { Provider } from '../../models/interface/User.interface'
import passport from 'passport'
import jwt from 'jsonwebtoken'

exports.saveUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body
    
    const hash = await bcrypt.hash(password, 10)
    
    const saveUser = await User.create({
      email,
      password: hash,
      name,
      provider: Provider.LOCAL,
    })

    res.json({ result: true, user : saveUser })
  } catch (err) {
    console.log(err)
  }
}

exports.localLogin = async (req: Request, res: Response) => {
    passport.authenticate('local', { session: false }, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user,
        })
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          console.log(err)
          res.send(err)
        }
        const token = jwt.sign({ idx: user.idx }, '123')
        
        res.cookie('accessToken', token, {
          expires: new Date(Date.now() + 86400e3),
          sameSite: 'lax',
        })
        
        return res.send({ user })
      })
    })(req, res)
  }