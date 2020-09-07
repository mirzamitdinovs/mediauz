import {Dimensions} from 'react-native';
import {
  FETCH_SUBJECTS,
  FETCH_LESSONS,
  FETCH_TEACHERS,
  FETCH_CATEGORIES,
  FETCH_NEWS,
  FETCH_ONLINE_LESSONS,
  FETCH_ARCHIVE_LESSONS,
  SET_NAVIGATION,
  CHANGE_FULLSCREEN,
  CHANGE_LANG,
  SIGN_IN,
  SIGN_OUT,
  SET_TEACHER_INFO,
  SET_SUBJECT_INFO,
  FETCH_LESSON_BY_TEACHER,
  SET_LOADER,
  SET_LESSON_INFO,
  SET_PATH_NAME,
  SET_STATUS,
  SET_SUBJECT_TEACHER_INFO,
  SET_LESSON_TEACHER_INFO,
  SET_CATEGORY_NAME,
  SET_MAIN_TEACHER,
  SET_PATH_SCREEN,
} from '../actions';
import {Assets} from '@react-navigation/stack';

let initialState = {
  language: 'uz',
  categoryName: '',
  userToken: '',
  userFullName: '',
  isLogged: false,
  subjects: [],
  onlineLessons: [],
  archiveLessons: [],
  lessons: [],
  categoriesUz: [],
  categoriesRu: [],
  teachers: [],
  news: [],
  pathScreen: 'MainScreen',

  mainNavigation: [],
  subjectLoader: true,
  categoryLoader: true,
  lessonLoader: true,
  teacherLoader: true,
  newsLoader: true,
  chaptersLoading: true,
  onlineLessonsLoader: true,
  archiveLessonsLoader: true,
  isFullScreen: false,
  // Dimensions.get('window').width > Dimensions.get('window').height,

  //*setTeacherInfo
  teacherName: '',
  teacherImage: '',
  //*setSubjectInfo
  subject: [],
  subjectId: 0,
  subjectTitle: '',
  //*setSubjectTeacherInfo
  subjectTeacher: [],
  subjectTeacherId: 0,
  subjectTeacherTitle: '',
  //*setLessonInfo
  lessonId: 0,
  lessonTitle: '',
  //*setLessonTeacherInfo
  lessonTeacherId: 0,
  lessonTeacherTitle: '',
  //*fetchLessonByTeacher
  lessonByTeacher: '',
  lessonByTeacherLoader: true,
  lessonByCategory: '',
  lessonByCategoryLoader: true,
  //*Navigation
  pathName: 'mainScreen',
  status: 'main',
  //*Global variable from teacher screen
  isMainTeacher: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      state = Object.assign({}, state, {
        subjects: action.subjects,
        subjectsUz: action.subjects.filter((a) => a.language_id === 1),
        subjectsRu: action.subjects.filter((a) => a.language_id === 3),
        onlineLessonsUz: action.subjects.filter(
          (a) => a.category.id === 24 && a.begin_time >= state.presentTime,
        ),
        onlineLessonsRu: action.subjects.filter(
          (a) => a.category.id === 25 && a.begin_time >= state.presentTime,
        ),

        // teachers: state.subjects.map((s) => s.teacher),
        subjectLoader: false,
      });
      return state;

    case SET_LOADER:
      state = Object.assign({}, state, {
        [action.loaderScreen]: true,
      });
      return state;
    case FETCH_LESSON_BY_TEACHER:
      state = action.isLessonByTeacher
        ? Object.assign({}, state, {
            lessonByTeacher: action.lessonByTeacher,
            lessonByTeacherLoader: false,
          })
        : Object.assign({}, state, {
            lessonByCategory: action.lessonByTeacher,
            lessonByCategoryLoader: false,
          });
      return state;
    case FETCH_CATEGORIES:
      state = Object.assign({}, state, {
        categoriesUz: action.categories.filter((a) => a.language_id === 1),
        categoriesRu: action.categories.filter((a) => a.language_id === 3),
        categoryLoader: false,
      });
      return state;
    case FETCH_ONLINE_LESSONS:
      state = Object.assign({}, state, {
        onlineLessons: action.onlineLessonsData,
        // categoriesUz: action.categories.filter((a) => a.language_id === 1),
        // categoriesRu: action.categories.filter((a) => a.language_id === 3),
        onlineLessonsLoader: false,
      });
      return state;
    case FETCH_ARCHIVE_LESSONS:
      state = Object.assign({}, state, {
        archiveLessons: action.archiveLessonsData,
        archiveLessonsLoader: false,
      });
      return state;
    case FETCH_TEACHERS:
      state = Object.assign({}, state, {
        teachers: action.teachers,
        teacherLoader: false,
      });
      return state;
    case FETCH_NEWS:
      state = Object.assign({}, state, {
        news: action.news,
        newsLoader: false,
      });
      return state;
    case SET_TEACHER_INFO:
      state = Object.assign({}, state, {
        teacherName: action.teacherName,
        teacherImage: action.teacherImage,
      });
      return state;
    case SET_SUBJECT_INFO:
      state =
        action.subjectId !== 0
          ? Object.assign({}, state, {
              subjectId: action.subjectId,
              subjectTitle: action.subjectTitle,
              subject: state.subjects.filter((a) => a.id === action.subjectId),
            })
          : Object.assign({}, state, {
              subjectId: action.subjectId,
            });
      return state;
    case SET_SUBJECT_TEACHER_INFO:
      state =
        action.subjectId !== 0
          ? Object.assign({}, state, {
              subjectTeacherId: action.subjectId,
              subjectTeacherTitle: action.subjectTitle,
              subjectTeacher: state.subjects.filter(
                (a) => a.id === action.subjectId,
              ),
            })
          : Object.assign({}, state, {
              subjectTeacherId: action.subjectId,
            });
      return state;
    case SET_LESSON_INFO:
      state = Object.assign({}, state, {
        lessonId: action.lessonId,
        lessonTitle: action.lessonTitle,
      });
      return state;
    case SET_LESSON_TEACHER_INFO:
      state = Object.assign({}, state, {
        lessonTeacherId: action.lessonId,
        lessonTeacherTitle: action.lessonTitle,
      });
      return state;

    case SET_NAVIGATION:
      state = Object.assign({}, state, {
        mainNavigation: action.mainNavigation,
      });
      return state;
    case SET_CATEGORY_NAME:
      state = Object.assign({}, state, {
        categoryName: action.title,
      });
      return state;
    case SET_MAIN_TEACHER:
      state = Object.assign({}, state, {
        isMainTeacher: action.isMainTeacher,
      });
      return state;

    case SIGN_IN:
      return {
        ...state,
        isLogged: true,
        userToken: action.userToken,
        userFullName: action.userFullName,
      };
    case SIGN_OUT:
      return {
        ...state,
        userToken: '',
        isLogged: false,
        userFullName: '',
      };
    case CHANGE_FULLSCREEN:
      return {
        ...state,
        isFullScreen: action.isFullScreen,
      };
    case CHANGE_LANG:
      return {
        ...state,
        language: action.language === null ? 'uz' : action.language,
      };
    case SET_PATH_NAME:
      return {
        ...state,
        pathName: action.pathName,
      };
    case SET_PATH_SCREEN:
      return {
        ...state,
        pathScreen: action.pathScreen,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default dataReducer;
