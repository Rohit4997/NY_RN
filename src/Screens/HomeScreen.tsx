import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1}}>
      <ScrollView >
        <View style={styles.parent}>
          <TopBar />
          <PickUp />
          <DropView />
        </View>

        <View style={styles.bodyView} >
          <FavLocationsTags />
          <MapLayout />
          <WelcomeToNy />
          <Text style={styles.bookAndMove}> Book and move anywhere in the city</Text>
          <Seprator />
          <Text style={{ marginTop: 16, width: '100%', textAlign: 'center', paddingBottom : 16 }}>Most ❤️ Auto App</Text>
          <View style={{ flex: 1 }} />
        </View>
      </ScrollView>
    </View>

  )
}

export default HomeScreen


const TopBar = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
      <Image
        style={styles.hamburger}
        source={require('./../assets/ic_hamburger_menu.png')}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./../assets/namma_yatri_logo.png')}
        />
      </View>
      <Image
        style={styles.bell}
        source={require('./../assets/ic_bell.png')}
      />
    </View>
  );
};

const PickUp = () => {
  return (
    <View style={styles.pickupView}>
      <Image
        style={styles.pickupImage}
        source={require('./../assets/ic_pickup.png')}
      />
      <Text style={styles.pickUpText}>Pickup: Current Location</Text>
    </View>
  )
}

const DropView = () => {
  return (
    <View style={styles.dropView}>
      <Image
        style={styles.dropImage}
        source={require('./../assets/ic_drop.png')}
      />
      <Text style={styles.pickUpText}>Where to?</Text>
    </View>
  )
}

const FavLocationsTags = () => {
  return (
    <View style={styles.favLocationsParent}>
      <FavLocItem image='ic_home' text='Home' />
      <FavLocItem image='ic_work' text='Work' />
      <FavLocItem image='ic_heart' text='All Favs' />
    </View>
  )
}

const FavLocItem = (props) => {
  let img = props.image;
  let src;
  switch (img) {
    case "ic_home":
      src = require('./../assets/ic_home.png');
      break;
    case "ic_work":
      src = require('./../assets/ic_work.png');
      break;
    case "ic_heart":
      src = require('./../assets/ic_heart.png');
      break;
    default:
      src = require('./../assets/ic_heart.png');
  }
  return (
    <View style={styles.favItem} >
      <Image
        style={styles.favImage}
        source={src}
      />
      <Text style={styles.favText}>{props.text}</Text>
    </View>
  )
}

const MapLayout = () => {
  return (
    <View style={{ width: '100%', height: 400 }}>
      <View style={styles.mapStyle}>
        <Image
          style={{ position: 'absolute', right: 0, bottom: 0, width: 52, height: 52, marginBottom: 10, marginRight: 10 }}
          source={require('./../assets/ic_recenter.png')}
        />
      </View>

    </View>
  )
}

const WelcomeToNy = () => {
  return (
    <View style={styles.welcomeNy}>
      {/* <Image
        style={styles.welcomeNyImg}
        source = {require('')}
      /> */}
      <View style={{ height: 50, width: 100, backgroundColor: 'black' }} />
      <View style={{ flex: 1, flexDirection: 'column' , marginLeft : 10}} >
        <Text>Welcome to Namma Yatri</Text>
        <Text>Your Suggested destination and Recent rides will appear here</Text>
      </View>
    </View>
  )
}

const Seprator = () => {
  return (
    <View style={styles.seprator}>
      <View style={{ flex: 1, marginHorizontal: 16, backgroundColor: 'white' }} />
    </View>
  )
}



















const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#2C2F3A",
    height: 168,
    flex: 0,
    padding: 16,
    zIndex: 1
  },
  hamburger: {
    height: 20,
    width: 20
  },
  logoContainer: {
    flex: 1,
    marginLeft: 10
  },
  logo: {
    height: 32,
    width: 100
  },
  bell: {
    height: 20,
    width: 20
  },
  pickupImage: {
    height: 12,
    width: 12
  },
  dropImage: {
    height: 12,
    width: 12
  },
  pickupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: "#303440",
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 8
  },
  dropView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingLeft: 10,
    zIndex: 2,
    borderRadius: 8,
    borderColor: "#E5E7EB"
  },
  pickUpText: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
    color: "#A7A7A7",
    fontSize: 18
  },
  dropText: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
    color: "#2C2F3A",
    fontSize: 20
  },
  bodyView: {
    flex: 1,
    backgroundColor: "#E5E7EB",
  },
  favLocationsParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: 40
  },
  favItem: {
    borderRadius: 8,
    borderColor: "#E5E7EB",
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5
  },
  favText: {
    color: "#454545",
    fontSize: 18,
    marginLeft: 5
  },
  favImage: {
    height: 16,
    width: 16
  },
  mapStyle: {
    flex: 1,
    margin: 16,
    backgroundColor: '#000000',
    borderRadius: 16,
    position: 'relative'
  },
  welcomeNy: {
    borderRadius: 16,
    borderColor: "#E5E7EB",
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16
  },
  welcomeNyImg: {

  },
  bookAndMove: {
    fontSize: 30,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    padding: 16
  },
  seprator: {
    width: '100%',
    height: 1
  }
})
