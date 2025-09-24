/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'Manager' | 'Worker'} role
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} name
 * @property {string} location
 * @property {string} startDate
 * @property {string} endDate
 * @property {'Planning' | 'InProgress' | 'Completed' | 'OnHold'} status
 * @property {string} managerId
 */

/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} dueDate
 * @property {'ToDo' | 'InProgress' | 'Done'} status
 * @property {string} projectId
 * @property {string} assigneeId
 */

/**
 * @typedef {Object} DailyLog
 * @property {string} id
 * @property {string} logDate
 * @property {string} notes
 * @property {string} photoUrl
 * @property {string} projectId
 */
