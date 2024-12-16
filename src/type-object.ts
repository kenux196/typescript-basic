// type altyp

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const userA: User = {
  id: 1,
  name: '윤상규',
  nickname: 'kenux',
  birth: '1978.02.24',
  bio: 'hello',
  location: 'daegu',
};

const userB: User = {
  id: 2,
  name: '홍두께',
  nickname: 'gom',
  birth: '2000.02.24',
  bio: 'hello2',
  location: 'busan',
};

// type User = {}
function test() {
  type User = {
    id: number;
    name: string;
    age: number;
  };
}

// index signature
type CountryCodes = {
  [key: string]: string;
};

const countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  Brazil: 'bz',
};
