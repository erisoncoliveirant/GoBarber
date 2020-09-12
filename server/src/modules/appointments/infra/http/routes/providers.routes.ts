import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRoutes = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRoutes.use(ensureAuthenticated);

providersRoutes.get('/', providersController.index);

providersRoutes.get(
  '/:id/month-availability',
  providerMonthAvailabilityController.index,
);

providersRoutes.get(
  '/:id/day-availability',
  providerDayAvailabilityController.index,
);

export default providersRoutes;
