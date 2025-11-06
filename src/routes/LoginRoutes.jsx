import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// jwt auth
const RegisterPage = Loadable(lazy(() => import('pages/auth/Register')));
const VerifyCode = Loadable(lazy(() => import('pages/auth/VerifyCode')));
const ResetPassword = Loadable(lazy(() => import('pages/auth/resetPassword/resetPassword')));
const VerifyPassCode = Loadable(lazy(() => import('pages/auth/resetPassword/verifyPassCode')));
const CreateNewPassword = Loadable(lazy(() => import('pages/auth/resetPassword/createNewPassword')));




const LoginRoutes = {
  path: '/',
  children: [
         {
          path: '/',
          element: <RegisterPage />
        },
    {
      path: '/Authentication',
      children: [
      

     



              {
          path: 'VerifyCode',
          element: <VerifyCode />
        },




            {
          path: 'ResetPassword',
          element: <ResetPassword />
        },


            {
          path: 'VerifyPassCode',
          element: <VerifyPassCode />
        },


             {
          path: 'CreateNewPassword',
          element: <CreateNewPassword />
        },









        


      ]
    }
  ]
};

export default LoginRoutes;
