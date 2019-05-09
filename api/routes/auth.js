import validator from 'validator';

export default function (router) {
  router.post('/auth/login', (req, res) => {
    // Login function
  })

  router.post('/auth/logout', (req, res) => {
    delete req.session.authUser
    res.json({
      ok: true
    })
    // Logout function
  })

  router.post('/auth/register', (req, res) => {
    if (!validator.isEmail(req.body.email))
      res.json({
        status: 'error',
        key: 'email',
        msg: 'Email is not valid'
      })
    if (req.body.password !== req.body.password2)
      res.json({
        status: 'error',
        key: 'password',
        msg: 'passwords are not matched'
      })
    res.json({
      status: 'success',
      msg: 'success'
    })

  })
}
