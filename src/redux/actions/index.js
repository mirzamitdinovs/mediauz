export const FETCH_SUBJECTS = 'FETCH_SUBJECTS';
export const FETCH_LESSON_BY_TEACHER = 'FETCH_LESSON_BY_TEACHER';
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_ONLINE_LESSONS = 'FETCH_ONLINE_LESSONS';
export const FETCH_ARCHIVE_LESSONS = 'FETCH_ARCHIVE_LESSONS';
export const SET_LOADER = 'SET_LOADER';
export const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
export const SET_MAIN_TEACHER = 'SET_MAIN_TEACHER';

export const SET_TEACHER_INFO = 'SET_TEACHER_INFO';
export const SET_SUBJECT_INFO = 'SET_SUBJECT_INFO';
export const SET_SUBJECT_TEACHER_INFO = 'SET_SUBJECT_TEACHER_INFO';
export const SET_LESSON_INFO = 'SET_LESSON_INFO';
export const SET_LESSON_TEACHER_INFO = 'SET_LESSON_TEACHER_INFO';

export const SET_NAVIGATION = 'SET_NAVIGATION';
export const CHANGE_FULLSCREEN = 'CHANGE_FULLSCREEN';
export const CHANGE_LANG = 'CHANGE_LANG';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_PATH_NAME = 'SET_PATH_NAME';
export const SET_PATH_SCREEN = 'SET_PATH_SCREEN';
export const SET_STATUS = 'SET_STATUS';
import {FETCHURL, FETCHTOKEN} from '../../constants/Colors';

export const fetchSubjects = () => async (dispatch) => {
  try {
    const api = `${FETCHURL}/teacher-subject`;
    const token = FETCHTOKEN;
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });
    const subjects = await response.json();
    dispatch({type: FETCH_SUBJECTS, subjects: subjects.data});
  } catch (e) {
    console.log(e);
  }
};
export const fetchLessonByTeacher = (
  topicId,
  userToken,
  isLessonByTeacher,
) => async (dispatch) => {
  try {
    const api = `${FETCHURL}/lesson?topic_id=${topicId}`;
    const token = 'KnoZiiQErRe-ybrc0ypvdwrjomyzDy6ii';
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });
    const lessons = await response.json();
    dispatch({
      type: FETCH_LESSON_BY_TEACHER,
      lessonByTeacher: lessons.data,
      isLessonByTeacher,
    });
  } catch (e) {
    console.log('lesson error: ', e);
  }
};
export const fetchTeachers = (topicId) => async (dispatch) => {
  try {
    const api = `${FETCHURL}/teachers`;
    const token = FETCHTOKEN;
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });
    const teachers = await response.json();

    dispatch({type: FETCH_TEACHERS, teachers: teachers.data, loading: false});
  } catch (e) {
    console.log('no teachers fetched');
  }
};
export const fetchCategories = () => async (dispatch) => {
  try {
    const api = `${FETCHURL}/subject`;
    const token = FETCHTOKEN;
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });

    const categories = await response.json();

    dispatch({
      type: FETCH_CATEGORIES,
      categories: categories.data,
      loading: false,
    });
  } catch (e) {
    console.log('no news fetched');
  }
};
export const fetchNews = (topicId) => async (dispatch) => {
  try {
    const api = `${FETCHURL}/news`;
    const token = FETCHTOKEN;
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });
    const news = await response.json();
    dispatch({type: FETCH_NEWS, news: news.data});
  } catch (e) {
    console.log('no news fetched');
  }
};
export const fetchOnlineLessons = () => async (dispatch) => {
  try {
    const api = `${FETCHURL}/meeting`;
    const token = FETCHTOKEN;
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });

    const onlineLessons = await response.json();
    dispatch({
      type: FETCH_ONLINE_LESSONS,
      onlineLessonsData: onlineLessons,
      loading: false,
    });
  } catch (e) {
    console.log('no online lessons fetched');
  }
};
export const fetchArchiveLessons = () => async (dispatch) => {
  try {
    const api = `${FETCHURL}/record`;
    const token = FETCHTOKEN;
    const response = await fetch(api, {
      headers: {Authorization: `Bearer ${token}`},
    });

    const archiveLessons = await response.json();
    dispatch({
      type: FETCH_ARCHIVE_LESSONS,
      archiveLessonsData: archiveLessons,
      loading: false,
    });
  } catch (e) {
    console.log('no archiveLessons fetched');
  }
};
export const setNavigation = (navigation) => {
  return {
    type: SET_NAVIGATION,
    mainNavigation: navigation,
  };
};
export const setCategoryName = (title) => {
  return {
    type: SET_CATEGORY_NAME,
    title,
  };
};
export const setMainTeacher = (isMainTeacher) => {
  return {
    type: SET_MAIN_TEACHER,
    isMainTeacher,
  };
};
export const setLoader = (title) => {
  return {
    type: SET_LOADER,
    loaderScreen: `${title}Loader`,
  };
};
export const changeToFull = (isFullScreen) => {
  return {
    type: CHANGE_FULLSCREEN,
    isFullScreen: isFullScreen,
  };
};
export const changeLang = (language) => {
  return {
    type: CHANGE_LANG,
    language: language,
  };
};

export const setTeacherInfo = (teacherName, teacherImage) => {
  return {
    type: SET_TEACHER_INFO,
    teacherName,
    teacherImage,
  };
};
export const setSubjectInfo = (subjectId, subjectTitle) => {
  return {
    type: SET_SUBJECT_INFO,
    subjectId,
    subjectTitle,
  };
};
export const setSubjectTeacherInfo = (subjectId, subjectTitle) => {
  return {
    type: SET_SUBJECT_TEACHER_INFO,
    subjectId,
    subjectTitle,
  };
};
export const setLessonInfo = (lessonId, lessonTitle) => {
  return {
    type: SET_LESSON_INFO,
    lessonId,
    lessonTitle,
  };
};
export const setLessonTeacherInfo = (lessonId, lessonTitle) => {
  return {
    type: SET_LESSON_TEACHER_INFO,
    lessonId,
    lessonTitle,
  };
};
export const setPathName = (pathName) => {
  return {
    type: SET_PATH_NAME,
    pathName,
  };
};
export const setPathScreen = (pathScreen) => {
  return {
    type: SET_PATH_SCREEN,
    pathScreen,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const signIn = (userToken, userFullName) => {
  return {
    type: SIGN_IN,
    userToken: userToken,
    userFullName: userFullName,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
