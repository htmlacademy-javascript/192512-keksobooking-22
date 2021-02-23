import { createSimilarOffers } from './data.js';
import { createMarks } from './map.js';
import './markup.js';
import './map.js';

const SIMILAR_OFFER_COUNT = 10;

const elemsOffers = createSimilarOffers(SIMILAR_OFFER_COUNT);
createMarks(elemsOffers);








