import React from "react";
// import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Octokit} from '@octokit/rest';

import styles from "./About.module.css";

import arroba from'./img/arroba.svg';
import telegram from './img/telegram.svg';


const octokit = new Octokit();

class About extends React.Component {
    state ={
        isLoading: true,
        repoList: [],
        errorText: 'Возникла ошибка при получении данных',
        isError: false,
        userData: []
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'AnastassiaVarabei'
        })
            .then(({ data }) => {
                this.setState({
                    repoList: data
                });
            })
            .catch(() => {
                this.setState({
                    isError: true
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });

        octokit.users.getByUsername({
            username: 'AnastassiaVarabei'
        })
            .then((user) => {
                this.setState({
                    userData: user.data
                })
            })
            .catch(() => {
                this.setState({
                    isError: true
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });
    };

    render() {
        const {isLoading, isError, errorText, repoList, userData} = this.state;

        if (!isError)
        return (
            <div className={styles.wrapper}>
                <div className={styles.userInfo}>
                    <h1 className={styles.userInfo__header}>
                        {userData.name} <a href={userData.html_url} target="__blank">{userData.login}</a>
                    </h1>
                    <p>
                        <img className={styles.avatar} src={userData.avatar_url} alt='Фото профиля' />
                        <div>
                            <p className={styles.avatar__title}> {userData.name} </p>
                            <p className={styles.avatar__subtitle}> {userData.bio} </p>
                            <div className={styles.avatar__contacts}>
                                <img alt='' src={arroba}/>
                                <p className={styles.avatar__contacts_data}>anastassiavarabej@gmail.com</p>
                            </div>
                            <div className={styles.avatar__phone}>
                                <img alt='' src={telegram}/>
                                <p className={styles.avatar__contacts_phone}>+375(29)6880459</p>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <h1>{isLoading ? <CircularProgress /> : 'Мои репозитории:'}</h1>
                    {!isLoading && <ol className={styles.repoList}>
                        {repoList.map(item => (
                            <li
                                className={styles.repoItem}
                                key={item.id}
                            >
                                <a href={item.html_url} target="__blank">{item.name}</a>
                            </li>
                        ))}
                    </ol>}
                </div>
            </div>
        );
        else
            return (
                <h2 className={styles.errorText}>
                    {errorText}...
                </h2>
            )
    };
    //         <CardContent>
    //             <h1 className={styles.wrap}>{isLoading ? <CircularProgress /> : 'My repositories'}</h1>
    //             {!isLoading && <ol>
    //                 {repoList.map(repo => (<li key={repo.id}>
    //                     {repo.name}
    //                 </li>) )}
    //             </ol>}
    //         </CardContent>
    //     );
    // }
}


export default About;
