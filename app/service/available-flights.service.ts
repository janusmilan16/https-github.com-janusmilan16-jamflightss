import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FlightModel } from '../interface/flight-model';

export class AvailableFlightsService implements InMemoryDbService {
  // Creating DB for flight details -- sample data to test application

  createDb() {
    const flights: FlightModel[] = [
      {
        id: 1,
        FlightCode: 'JAM-101',
        SeatsAvailable: 10,
        OriginDestination: {
          Origin: 'BKK',
          Destination: 'ICN',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 10699,
      },
      {
        id: 2,
        FlightCode: 'JAM-102',
        SeatsAvailable: 6,
        OriginDestination: {
          Origin: 'BKK',
          Destination: 'MNL',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 10299,
      },
      {
        id: 3,
        FlightCode: 'JAM-103',
        SeatsAvailable: 5,
        OriginDestination: {
          Origin: 'BKK',
          Destination: 'NRT',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 22699,
      },
      {
        id: 4,
        FlightCode: 'JAM-201',
        SeatsAvailable: 10,
        OriginDestination: {
          Origin: 'ICN',
          Destination: 'BKK',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 10699,
      },
      {
        id: 5,
        FlightCode: 'JAM-202',
        SeatsAvailable: 18,
        OriginDestination: {
          Origin: 'ICN',
          Destination: 'MNL',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 6999,
      },
      {
        id: 6,
        FlightCode: 'JAM-203',
        SeatsAvailable: 4,
        OriginDestination: {
          Origin: 'ICN',
          Destination: 'NRT',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 11999,
      },
      {
        id: 7,
        FlightCode: 'JAM-301',
        SeatsAvailable: 8,
        OriginDestination: {
          Origin: 'MNL',
          Destination: 'BKK',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 10299,
      },
      {
        id: 8,
        FlightCode: 'JAM-302',
        SeatsAvailable: 16,
        OriginDestination: {
          Origin: 'MNL',
          Destination: 'ICN',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 6999,
      },
      {
        id: 9,
        FlightCode: 'JAM-303',
        SeatsAvailable: 13,
        OriginDestination: {
          Origin: 'MNL',
          Destination: 'NRT',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 14499,
      },
      {
        id: 10,
        FlightCode: 'JAM-401',
        SeatsAvailable: 11,
        OriginDestination: {
          Origin: 'NRT',
          Destination: 'BKK',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 22699,
      },
      {
        id: 11,
        FlightCode: 'JAM-402',
        SeatsAvailable: 21,
        OriginDestination: {
          Origin: 'NRT',
          Destination: 'ICN',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 11999,
      },
      {
        id: 12,
        FlightCode: 'JAM-401',
        SeatsAvailable: 13,
        OriginDestination: {
          Origin: 'NRT',
          Destination: 'MNL',
          DeptDate: new Date('1 May, 2023'),
          ArrDate: new Date('5 May, 2023'),
        },
        FareDetails: 14499,
      },
    ];

    return { flights };
  }
}
