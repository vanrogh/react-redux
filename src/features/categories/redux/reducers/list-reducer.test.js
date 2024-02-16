import sut from './list-reducer';
import * as actions from '../actions';

describe('categories reducer', () => {

    it('should return the initial state', () => {
        expect(sut(undefined, {})).toEqual({
            items: [],
            isLoading: false
        })
    })

    describe('LOAD_CATEGORIES', () => {
        it('should set loading to true', () => {
            expect(
                sut({
                    isLoading: false,
                    items: [{ a: 1 }]
                },
                    actions.loadCategoriesAction.create())
            ).toEqual({
                isLoading: true,
                items: [{ a: 1 }]
            })
        })
    })

    describe('LOAD_CATEGORIES_SUCCESS', () => {
        it('should set loading to false and set list', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.loadCategoriesSuccessAction.create([{ id: 1 }]))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1 }]
            })
        })
    })

    describe('LOAD_CATEGORIES', () => {
        it('should set loading flag to true', () => {
            expect(
                sut({
                    isLoading: false,
                    items: [{ a: 1 }]
                },
                    actions.loadCategoryAction.create())
            ).toEqual({
                isLoading: true,
                items: [{ a: 1 }]
            })
        })
    })

    describe('LOAD_CATEGORY_SUCCESS', () => {
        it('should update single from empty', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.loadCategorySuccessAction.create({ id: 1, name: 'Test 1' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1' }]
            })
        });

        it('should update single', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }]
                },
                    actions.loadCategorySuccessAction.create({ id: 1, name: 'Test 1 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1 New' }]
            })
        });

        it('should update first of 3', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
                },
                    actions.loadCategorySuccessAction.create({ id: 1, name: 'Test 1 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1 New' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
            })
        });

        it('should update middle of 3', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
                },
                    actions.loadCategorySuccessAction.create({ id: 2, name: 'Test 2 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2 New' }, { id: 3, name: 'Test 3' }]
            })
        });

        it('should update last of 3', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
                },
                    actions.loadCategorySuccessAction.create({ id: 3, name: 'Test 3 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3 New' }]
            })
        })
    })

    describe('EDIT_CATEGORY_SUCCESS', () => {
        it('should update single from empty', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.editCategorySuccessAction.create({ id: 1, name: 'Test 1' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1' }]
            })
        });

        it('should update single', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }]
                },
                    actions.editCategorySuccessAction.create({ id: 1, name: 'Test 1 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1 New' }]
            })
        });

        it('should update first of 3', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
                },
                    actions.editCategorySuccessAction.create({ id: 1, name: 'Test 1 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1 New' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
            })
        });

        it('should update middle of 3', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
                },
                    actions.editCategorySuccessAction.create({ id: 2, name: 'Test 2 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2 New' }, { id: 3, name: 'Test 3' }]
            })
        });

        it('should update last of 3', () => {
            expect(
                sut({
                    isLoading: true,
                    items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }]
                },
                    actions.editCategorySuccessAction.create({ id: 3, name: 'Test 3 New' }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3 New' }]
            })
        })
    })
});