import {render} from './framework/render.js';
import DestinationsModel from './model/destinations-model.js';
import EventsModel from './model/events-model.js';
import OffersModel from './model/offers-model.js';
import FilterView from './view/filter-view.js';
import TripPresenter from './presenter/trip-presenter.js';


const pageHeaderElement = document.querySelector('.page-header');
const filtersElement = pageHeaderElement.querySelector('.trip-controls__filters');
const pageMainElement = document.querySelector('.page-main');
const pageBodyContainerElement = pageMainElement.querySelector('.page-body__container');


render(new FilterView, filtersElement);


const destinationsModel = new DestinationsModel();
const eventsModel = new EventsModel();
const offersModel = new OffersModel();
const tripPresenter = new TripPresenter({
  tripContainer: pageBodyContainerElement,
  destinationsModel,
  eventsModel,
  offersModel,
});


destinationsModel.init();
eventsModel.init();
offersModel.init();
tripPresenter.init();
