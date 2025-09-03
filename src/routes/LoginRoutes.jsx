import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// jwt auth
const RegisterPage = Loadable(lazy(() => import('pages/auth/Register')));
const OnBoarding = Loadable(lazy(() => import('pages/auth/OnBoard')));
const CreatePassword = Loadable(lazy(() => import('pages/auth/CreatePassword')));
const VerifyCode = Loadable(lazy(() => import('pages/auth/VerifyCode')));
const SelectChannel = Loadable(lazy(() => import('pages/auth/SelectChannel')));
const ProfileStep1 = Loadable(lazy(() => import('pages/auth/ProfileStep1')));
const ProfileStep2 = Loadable(lazy(() => import('pages/auth/ProfileStep2')));
const ProfileStep3 = Loadable(lazy(() => import('pages/auth/ProfileStep3')));
const ProfileStep4 = Loadable(lazy(() => import('pages/auth/ProfileStep4')));
const ResetPassword = Loadable(lazy(() => import('pages/auth/resetPassword/resetPassword')));
const VerifyPassCode = Loadable(lazy(() => import('pages/auth/resetPassword/verifyPassCode')));
const CreateNewPassword = Loadable(lazy(() => import('pages/auth/resetPassword/createNewPassword')));





// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
         {
          path: '/',
          element: <OnBoarding />
        },
    {
      path: '/Authentication',
      children: [
        {
          path: '/Authentication',
          element: <RegisterPage />
        },
        {
          path: '/Authentication',
          element: <RegisterPage />
        },

        
     


          {
          path: 'CreatePassword',
          element: <CreatePassword />
        },

     

        
              {
          path: 'SelectChannel',
          element: <SelectChannel />
        },



              {
          path: 'VerifyCode',
          element: <VerifyCode />
        },





              {
          path: 'ProfileStep1',
          element: <ProfileStep1 />
        },


            {
          path: 'ProfileStep2',
          element: <ProfileStep2 />
        },

        
            {
          path: 'ProfileStep3',
          element: <ProfileStep3 />
        },



          {
          path: 'ProfileStep4',
          element: <ProfileStep4 />
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
