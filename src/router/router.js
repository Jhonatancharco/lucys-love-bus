import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ProfileView from '../views/ProfileView.vue';
import MyEventsView from '../views/MyEventsView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import EventRegistrationConfirmation from '../views/EventRegistrationConfirmation.vue';
import SingleEventView from '../views/SingleEventView.vue';
import SignUpLandingView from '../views/SignUpLandingView.vue';
import CreateEventView from '../views/CreateEventView.vue';
import UpcomingEventsView from '../views/UpcomingEventsView.vue';
import CreateAnnouncementView from '../views/CreateAnnouncementView.vue';
import VerifyEmailView from '../views/VerifyEmailView.vue';
import ForgotPasswordRequest from '../views/ForgotPasswordRequest.vue';
import ForgotPasswordReset from '../views/ForgotPasswordReset.vue';
import ForgotPasswordConfirmation from '../views/ForgotPasswordConfirmation.vue';
import FamilyRequests from '../views/FamilyRequests.vue';
import EditEventView from '../views/EditEventView.vue';
import SingleFamilyRequest from '../views/SingleFamilyRequest.vue';
import FamilyRequestConfirmation from '../views/FamilyRequestConfirmation.vue';
import GpSignUp from '../views/GpSignUp.vue';
import PfSignUp from '../views/PfSignUp.vue';
import Settings from '../views/Settings.vue';
import ChangeEmailView from '../views/ChangeEmailView.vue';
import PersonalRequests from '../views/PersonalRequests.vue';
import ChangePasswordlView from '../views/ChangePasswordlView.vue';
import DeactivateAccountView from '../views/DeactivateAccountView.vue';
import EditFamilyInfoView from '../views/EditFamilyInfoView.vue';
import ChangeLoginInfoConfirmation from '../views/ChangeLoginInfoConfirmation.vue';
import SignupConfirmation from '../views/SignupConfirmation.vue';

import tokenService from '../auth/token';

import store from '../store/store';

Vue.use(Router);

const allRoutes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login',
  },
  {
    path: '/upcoming-events',
    name: 'upcoming-events-view',
    component: UpcomingEventsView,
  },
  {
    path: '/create-event',
    name: 'create-event',
    component: CreateEventView,
  },
  {
    path: '/create-announcement',
    name: 'create-announcement',
    component: CreateAnnouncementView,
    props: true,
  },
  {
    path: '/edit-event/:eventId',
    name: 'edit-event',
    component: EditEventView,
    props: true,
  },
  {
    path: '/event/:eventId',
    name: 'single-event',
    component: SingleEventView,
    props(route) {
      const props = { ...route.params };
      props.eventId = +props.eventId; // cast as a Number
      return props;
    },
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
  },
  {
    path: '/event-registration-confirmation/:success',
    name: 'event-registration-confirmation',
    component: EventRegistrationConfirmation,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/sign-up-landing',
    name: 'signup-landing',
    component: SignUpLandingView,
  },
  {
    path: '/sign-up-gp',
    name: 'sign-up-gp',
    component: GpSignUp,
  },
  {
    path: '/sign-up-pf',
    name: 'sign-up-pf',
    component: PfSignUp,
  },
  {
    path: '/sign-up-confirmation',
    name: 'sign-up-confirmation',
    component: SignupConfirmation,
    props: true,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/family-requests',
    name: 'family-requests',
    component: FamilyRequests,
  },
  {
    path: '/single-family-request/:request_id',
    name: 'single-family-request',
    component: SingleFamilyRequest,
  },
  {
    path: '/family-request-confirmation',
    name: 'family-request-confirmation',
    component: FamilyRequestConfirmation,
    props: true,
  },
  {
    path: '/my-events',
    name: 'my-events',
    component: MyEventsView,
  },
  {
    path: '/verify-email/:secret_key',
    name: 'verify-email',
    component: VerifyEmailView,
  },
  {
    path: '/forgot-password-request',
    name: 'forgot-password-request',
    component: ForgotPasswordRequest,
  },
  {
    path: '/forgot-password-reset/:secret_key',
    name: 'forgot-password-reset',
    component: ForgotPasswordReset,
  },
  {
    path: '/forgot-password-confirmation',
    name: 'forgot-password-confirmation',
    component: ForgotPasswordConfirmation,
    props: true,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/change-email',
    name: 'change-email',
    component: ChangeEmailView,
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePasswordlView,
  },
  {
    path: '/change-login-info-confirmation',
    name: 'change-login-info-confirmation',
    component: ChangeLoginInfoConfirmation,
    props: true,
  },
  {
    path: '/edit-family-information',
    name: 'edit-family-information',
    component: EditFamilyInfoView,
  },
  {
    path: '/personal-requests',
    name: 'personal-requests',
    component: PersonalRequests,
  },
  {
    path: '/deactivate-account',
    name: 'deactivate-account',
    component: DeactivateAccountView,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = new Router({
  mode: 'history',
  routes: allRoutes,
});

const publicRoutes = [
  'login', 'signup-landing', 'sign-up-gp', 'sign-up-pf',
  'sign-up-confirmation', 'forgot-password-request',
  'forgot-password-reset', 'forgot-password-confirmation',
  'verify-email',
];

router.beforeEach((to, from, next) => {
  if (tokenService.getPrivilegeLevel() < 0) {
    if (publicRoutes.includes(to.name)) next();
    else {
      store.dispatch('clearAll');
      next({ name: 'login' });
    }
  } else next();
});

export default router;
