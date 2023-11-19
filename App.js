import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import data from './src/data';
import { ScrollView } from 'react-native-web';
export default class App extends Component {
 
  constructor(props) {
     
        super(props);
        this.state = {
          tableHead: ['Id', 'Username', 'Password', 'UserType'],
          tableHead2: ['Id',  'Lastname', 'Firstname', 'Course'],
          tableHead3: ['Id', 'Name', 'Course'],

        }

  }
  

  render() {
    const students = data.filter((user) => user.type === "Student");
    const Item = ({course, id, name}) => (
      
      <Rows data={[[id, `${name.fname} ${name.lname} `, course]]}  borderStyle={{borderWidth: 1, borderColor: '#E7B10A' }} style={{borderBottomWidth: 1, borderColor: '#E7B10A', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
     
    );

    const state = this.state;
    return (
      <View style={styles.container}>

      <Text style={{fontSize: 30, fontWeight: '700', fontFamily: 'Times New Roman', color: '#004225'}}>List of Accounts</Text>
              <Table borderStyle={{borderWidth: 1, borderColor: '#E7B10A'}}>

                <Row data={state.tableHead} style={styles.head} textStyle={{margin: 6, color: 'Black', fontFamily: 'Tahoma', textAlign: 'center'}}/>
                
                {data.map((users)=>{
                  return(
                    <View>
                      <Rows data={[[users.id, users.user, users.pass, users.type]]} borderStyle={{borderWidth: 1, borderColor: '#E7B10A' }} style={{borderBottomWidth: 1, borderColor: '#E7B10A', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
                    </View>
                  )
                })}
              </Table>

      <Text style={{fontSize: 30, fontFamily: 'Times New Roman', fontWeight: '700', color: '#004225', marginTop: 20}}>List of Users</Text>
        <Table borderStyle={{borderWidth: 1, borderColor: '#E7B10A'}}>
          <ScrollView>
              <Row data={state.tableHead2}  style={styles.head} textStyle={{margin: 6, color: 'Black', fontFamily: 'Tahoma', textAlign: 'center'}}/>
              
              {data.map((users)=>{
                return(
                  <View>
                    <Rows data={[[users.id, users.name.lname, users.name.fname, users.course]]} borderStyle={{borderWidth: 1, borderColor: '#E7B10A' }} style={{borderBottomWidth: 1, borderColor: '#FFB000', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
                  </View>
                )
              })}
          </ScrollView>

        </Table>

        <Text style={{fontSize: 30, fontWeight: '700', fontFamily: 'Times New Roman', color: '#004225', marginTop: 20}}>List of Students</Text>
        <Table borderStyle={{borderWidth: 1, borderColor: '#E7B10A'}}>
              <Row data={state.tableHead3}  style={styles.head} textStyle={{margin: 6, color: 'Black', fontFamily: 'Tahoma', textAlign: 'center'}}/>
              
              <FlatList
              data={students}
              renderItem={({item}) => <Item course={item.course } id={item.id } name={item.name} />}
              
              keyExtractor={item => item.id}
            />
        
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 35, backgroundColor: '#FAF0E4' },
  head: { height: 40, backgroundColor: '#E7B10A' },
  text: { margin: 6, textAlign: 'center', fontFamily: 'Tahoma', fontSize: 16}
});