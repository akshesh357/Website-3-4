'use strict';

module.exports = function(Client) {

};
// //send verification email after registration
//  Client.afterRemote('create', function(context, userInstance, next) {
//    console.log('> user.afterRemote triggered');
//
//    var options = {
//      type: 'email',
//      to: userInstance.email,
//      from: 'noreply@loopback.com',
//      subject: 'Thanks for registering.',
//      template: path.resolve(__dirname, '../../client/js/ArkilioProjectsPage.html'),
//      redirect: '/verified',
//      user: user
//    };
//
//    userInstance.verify(options, function(err, response, next) {
//      if (err) return next(err);
//
//      console.log('> verification email sent:', response);
//
//      context.res.render('response', {
//        title: 'Signed up successfully',
//        content: 'Please check your email and click on the verification link ' -
//            'before logging in.',
//        redirectTo: '/',
//        redirectToLinkText: 'Log in'
//      });
//    });
// });
