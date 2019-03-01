/**
 * Created by linxin on 2017/3/11.
 */
// 统一得方法  参数是states
export default {
    getEventList (states) {
        return states.event;
    },
    // 传参方式
    getCount: (states) => (id) => {
        console.log(states, id)
    },
    getToDo (states) {
        return states.event.filter(function (d) {
            if (d.type === 1) {
                return d;
            }
        });
    },
    getDone (states) {
        return states.event.filter(function (d) {
            if (d.type === 2) {
                return d;
            }
        });
    },
    getCancel (states) {
        return states.event.filter(function (d) {
            if (d.type === 3) {
                return d;
            }
        });
    }
};