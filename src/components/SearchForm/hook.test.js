import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useForm from "./hook"; 

const setup = (params) => renderHook(() => useForm(params)) //❌ renderHook is not soporter on recat 18

test('should chebge keyword', () => {
    const { result } = setup()
    
    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should use initial values', () => {
    const { result } = setup({
        initialKeyword: 'iron man'
    })

    expect(result.current.keyword).toBe('iron man')
})

test('should update currectly times when uses twice', () => {
    const { result } = setup({
        initialKeyword: 'avengers'
    })
    
    act(() => {
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })

    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2)
})