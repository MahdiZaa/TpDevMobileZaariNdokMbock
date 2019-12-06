import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { SwipeRow } from 'react-native-swipe-list-view';

class ItemWeather extends Component {
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
        city: PropTypes.any.isRequired
    }

    state = {}

    render() {
        return (
            <SwipeRow leftOpenValue={0} rightOpenValue={-75} key={this.props.city.name}>
                <View style={styles.standaloneRowBack}>
                    <Button title="Suppr." onPress={() => this.props.onDelete(this.props.city.name)}></Button>
                </View>
                <View style={styles.standaloneRowFront}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{this.props.city.name}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text>{this.props.city.main.temp} °C</Text>
                            <Image style={{ width: 80, height: 80 }} source={{ uri: `http://openweathermap.org/img/wn/09d.icon}@2x.png` }} />
                        </View>
                    </View>
                </View>
            </SwipeRow>
        );
    }
}

export default ItemWeather;

const styles = StyleSheet.create({
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 80,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    }
});